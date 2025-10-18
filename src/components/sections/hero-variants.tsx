"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import {
  ButtonSolidPrimary,
  ButtonOutlineHover,
} from "@/components/buttons/button-variants";
import {
  Button3DElevated,
  ButtonGradientShimmer,
  ButtonMagnetic,
  ButtonPulseSuccess,
} from "../buttons/button-variants.js";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.js";

// Hero Variant 1: Centered with Floating Elements
export function HeroCenteredFloating() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute left-10 top-20 h-20 w-20 rounded-full bg-foreground/5 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-foreground/5 blur-xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Introducing our new platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-balance text-5xl font-bold md:text-7xl"
        >
          Build the future with our platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 text-balance text-xl text-muted-foreground"
        >
          The complete toolkit to stop configuring and start innovating.
          Securely build, deploy, and scale the best web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonGradientShimmer>Get Started</ButtonGradientShimmer>
          <ButtonMagnetic className="!border-white !text-white">
            Watch Demo
          </ButtonMagnetic>
        </motion.div>
      </div>
    </section>
  );
}

// Hero Variant 2: Split Screen
export function HeroSplitScreen() {
  return (
    <section className="grid min-h-screen items-center gap-8 px-4 py-20 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-block rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">
          New Release
        </div>

        <h1 className="text-balance text-5xl font-bold md:text-6xl">
          Super fast motion for every team
        </h1>

        <p className="text-pretty text-lg text-muted-foreground">
          Over 20,000 creative teams use our platform to create stunning
          animations online. Join them today and transform your workflow.
        </p>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground px-6 py-3 font-medium text-background"
          >
            Try for free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Play className="h-4 w-4" />
            Watch video
          </motion.button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8">
          <p className="mb-4 text-sm text-muted-foreground">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {["Google", "TikTok", "Netflix", "Spotify"].map((brand) => (
              <span key={brand} className="text-lg font-semibold opacity-50">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-foreground/10 to-foreground/5" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-32 w-32 rounded-full bg-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Hero Variant 3: Minimal with Stats
export function HeroMinimalStats() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="mb-8 text-balance text-6xl font-bold md:text-8xl">
            The complete platform to build the web.
          </h1>
          <p className="max-w-2xl text-pretty text-xl text-muted-foreground">
            Your team's toolkit to stop configuring and start innovating.
            Securely build, deploy, and scale the best web experiences with
            Vercel.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-foreground px-8 py-4 font-medium text-background"
            >
              Get a demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="rounded-lg border-2 border-foreground px-8 py-4 font-medium"
            >
              Explore the Product
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4"
        >
          {[
            {
              value: "20 days",
              label: "saved on daily builds",
              company: "NETFLIX",
            },
            {
              value: "98%",
              label: "faster time to market",
              company: "TripAdvisor",
            },
            { value: "300%", label: "increase in SEO", company: "box" },
            { value: "6x", label: "faster to build + deploy", company: "ebay" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="mb-2 text-3xl font-bold">{stat.value}</div>
              <div className="mb-3 text-sm text-muted-foreground">
                {stat.label}
              </div>
              <div className="text-xs font-semibold">{stat.company}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Hero Variant 4: Video Background
export function HeroVideoBackground() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-balance text-6xl font-bold md:text-8xl"
        >
          Innovation starts here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-balance text-xl text-muted-foreground"
        >
          Transform your ideas into reality with cutting-edge technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group mx-auto flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-medium text-background"
          >
            <span>Start Building</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// Hero Variant 5: Bento Grid
export function HeroBentoGrid() {
  return (
    <section className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-balance text-5xl font-bold md:text-7xl">
            Everything you need to succeed
          </h1>
          <p className="text-balance text-xl text-muted-foreground">
            All the tools and features in one powerful platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-muted p-8 md:col-span-2"
          >
            <div>
              <Zap className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-2xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Deploy in seconds, not hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-muted p-8"
          >
            <div>
              <Star className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-2xl font-bold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Enterprise-grade infrastructure
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-muted p-8"
          >
            <div>
              <TrendingUp className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-2xl font-bold">Scale Infinitely</h3>
              <p className="text-muted-foreground">Grow without limits</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex min-h-[300px] items-center justify-center rounded-3xl bg-foreground p-8 text-background md:col-span-2"
          >
            <div className="text-center">
              <h3 className="mb-4 text-3xl font-bold">Ready to get started?</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-background px-8 py-3 font-medium text-foreground"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Hero Variant 6: Parallax Scroll
export function HeroParallaxScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-5xl px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-6 w-[70%] text-balance text-4xl font-bold text-white md:text-8xl lg:text-6xl"
        >
          We Design. Develop. Deploy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 w-[68%] text-wrap rounded-[5px] bg-black px-[12px] text-lg text-white lg:w-fit lg:text-balance lg:text-2xl"
        >
          <TypewriterEffectSmooth
            className="h-fit !pb-0"
            cursorClassName="text-wrap lg:text-nowrap  lg:h-[16px]"
            words={[
              {
                text: "Building",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "Beautiful",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "Digital",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "Experiences",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "That",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "Drive",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
              {
                text: "Growth",
                className:
                  "!text-[#fff] font-bold lg:font-light text-[16px] !lg:text-[22px] ",
              },
            ]}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <ButtonGradientShimmer className="!border-[0.5px] !border-white !text-white">
            Get a Free Quote
          </ButtonGradientShimmer>

          <ButtonPulseSuccess className="border-[0.5px] !border-white !bg-black/50 !text-white">
            View Our Work
          </ButtonPulseSuccess>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Hero Variant 7: Animated Gradient
export function HeroAnimatedGradient() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-balance text-6xl font-bold md:text-8xl">
            The AI Toolkit for TypeScript
          </h1>

          <p className="mb-8 text-balance text-xl text-muted-foreground">
            From the creators of Next.js, the AI SDK is a free open-source
            library that gives you the tools you need to build AI-powered
            products.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-foreground px-8 py-3 font-medium text-background"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-lg border border-border px-8 py-3 font-medium"
            >
              <span className="font-mono text-sm">$ npm i ai</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-lg px-8 py-3 font-medium"
            >
              Visit Playground
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="mb-6 text-sm text-muted-foreground">
            Trusted by builders at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {[
              "perplexity",
              "supabase",
              "Vercel",
              "SITECORE",
              "Chick-fil-A",
              "Chatbase",
            ].map((brand) => (
              <span key={brand} className="text-lg font-semibold">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { HeroCenteredFloating as Hero1 };
export { HeroSplitScreen as Hero2 };
export { HeroMinimalStats as Hero3 };
export { HeroVideoBackground as Hero4 };
export { HeroBentoGrid as Hero5 };
export { HeroParallaxScroll as Hero6 };
export { HeroAnimatedGradient as Hero7 };
