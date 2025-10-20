import React from "react";
import Home from "./home/page.js";
import { Helmet } from "react-helmet-async";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <div className="flex h-auto min-h-screen items-center justify-center bg-[#000] px-0 py-8">
      <Helmet>
        <title>Pure Design — Web & Mobile Product Design</title>
        <meta
          name="description"
          content="We create beautiful web & mobile apps..."
        />
        <meta property="og:title" content="Pure Design" />
        <meta
          property="og:description"
          content="We create beautiful web & mobile apps..."
        />
        <meta property="og:image" content="https://puredesign.ng/pd-flat.png" />
        <link rel="canonical" href="https://puredesign.ng/" />
      </Helmet>
      <ReactLenis root />
      <Home />
    </div>
  );
}

export default App;
