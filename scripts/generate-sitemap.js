import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  // add all important routes or generate dynamically from your routes list
];

async function build() {
  const stream = new SitemapStream({ hostname: "https://puredesign.ng" });
  const writeStream = createWriteStream("./dist/sitemap.xml");
  streamToPromise(stream.pipe(writeStream));
  links.forEach((link) => stream.write(link));
  stream.end();
}

build();
