import { HeroParallaxScroll } from "@/components/sections/hero-variants";
import { AboutFeatureHighlights } from "@/components/sections/about-variants";
import { TestimonialMarquee } from "@/components/sections/testimonial-variants";
import { Navbar2 } from "../components/navigation/navbar-variants.js";
import { Service1 } from "../components/sections/service-variants.js";
import {
  GalleryCarousel,
  GalleryHoverCards,
  GalleryMasonry,
} from "../components/sections/gallery-variants.js";
import { Footer4 } from "../components/sections/footer-variants.js";
import { HeroParallaxRender } from "../components/parallax/HeroParallaxRender.js";
import Waves from "../components/Waves.js";
import { TextHoverEffect } from "../components/ui/text-hover-effect.js";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* <NavbarGlassmorphism /> */}
      {/* <Navbar1 /> */}
      <Navbar2 />
      {/* <Navbar1 />
      <Navbar1 /> */}

      <div
        style={{ width: "100%", position: "absolute" }}
        className="left-0 top-0 h-[730px] lg:h-[1080px]"
      >
        {/* <LiquidEther
          colors={["#dcb3e3e0", "#3d0c34e0", "#577daee0"]}
          mouseForce={20}
          cursorSize={80}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
        <Waves
          lineColor="#ffffffb2"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <div style={{ width: "100%", position: "relative" }} className="z-[10]">
        <HeroParallaxScroll />
        <HeroParallaxRender />
        <AboutFeatureHighlights />
        <div className="flex h-[30rem] w-full items-center justify-center">
          <TextHoverEffect text="PURELY" />
        </div>
        <div className="flex h-[30rem] w-full items-center justify-center">
          <TextHoverEffect text="MAGICAL" />
        </div>
        <Service1 />
        <TestimonialMarquee />

        <GalleryMasonry />
        <GalleryCarousel />
        <GalleryHoverCards />
        <Footer4 />
      </div>
    </div>
  );
}
