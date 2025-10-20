// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

async function build() {
  const sitemap = new SitemapStream({ hostname: "https://puredesign.ng" });

  const writeStream = createWriteStream(resolve("./dist/sitemap.xml"));

  sitemap.pipe(writeStream);

  // Add your routes
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
  // Add more pages here...

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated!");
}

build().catch(console.error);
