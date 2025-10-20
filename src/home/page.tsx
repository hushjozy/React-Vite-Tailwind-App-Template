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
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack.js";
import { Cloud, Cpu, Icon, Layers, Lightbulb, Rocket } from "lucide-react";
import BlurText from "../components/BlurText.js";

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
        <ScrollStack className="!relative !h-[100vh] py-[20px] lg:py-[20%]">
          <ScrollStackItem itemClassName="!bg-[#8A2BE2] !h-fit !py-[80px] !flex !flex-row justify-center  flex-wrap lg:flex-nowrap gap-[40px] !px-[20%]">
            <div>
              <BlurText
                text="Create Bold"
                delay={100}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-[30px] font-bold text-white lg:text-[50px]"
              />
            </div>
            <div className="flex h-[220px] flex-grow items-center justify-center rounded-[25px] border-[14px] border-white px-[40px] py-[20px]">
              <Lightbulb
                className="h-[80px] w-[80px] text-white"
                strokeWidth={3}
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!bg-[#00C9A7] !h-fit !py-[80px] !flex !flex-row justify-center  flex-wrap lg:flex-nowrap gap-[40px] !px-[20%]">
            <div>
              <BlurText
                text="Design Smart"
                delay={100}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-[30px] font-bold text-white lg:text-[50px]"
              />
            </div>
            <div className="flex h-[220px] flex-grow items-center justify-center rounded-[25px] border-[14px] border-white px-[40px] py-[20px]">
              <Cpu className="h-[80px] w-[80px] text-white" strokeWidth={3} />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!bg-[#FF7B00] !h-fit !py-[80px] !flex !flex-row justify-center  flex-wrap lg:flex-nowrap gap-[40px] !px-[20%]">
            <div>
              <BlurText
                text="Build Fast"
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-[30px] font-bold text-white lg:text-[50px]"
              />
            </div>
            <div className="flex h-[220px] flex-grow items-center justify-center rounded-[25px] border-[14px] border-white px-[40px] py-[20px]">
              <Rocket
                className="h-[80px] w-[80px] text-white"
                strokeWidth={3}
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!bg-[#1E90FF] !h-fit !py-[80px] !flex !flex-row justify-center  flex-wrap lg:flex-nowrap gap-[40px] !px-[20%]">
            <div>
              <BlurText
                text="Innovate More"
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-[30px] font-bold text-white lg:text-[50px]"
              />
            </div>
            <div className="flex h-[220px] flex-grow items-center justify-center rounded-[25px] border-[14px] border-white px-[40px] py-[20px]">
              <Layers
                className="h-[80px] w-[80px] text-white"
                strokeWidth={3}
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!bg-[#FF1493] !h-fit !py-[80px] !flex !flex-row justify-center  flex-wrap lg:flex-nowrap gap-[40px] !px-[20%]">
            <div>
              <BlurText
                text="Evolve Digitally"
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-[30px] font-bold text-white lg:text-[50px]"
              />
            </div>
            <div className="flex h-[220px] flex-grow items-center justify-center rounded-[25px] border-[14px] border-white px-[40px] py-[20px]">
              <Cloud className="h-[80px] w-[80px] text-white" strokeWidth={3} />
            </div>
          </ScrollStackItem>
        </ScrollStack>
        <TestimonialMarquee />

        <GalleryMasonry />
        <GalleryCarousel />
        <GalleryHoverCards />
        <Footer4 />
      </div>
    </div>
  );
}
