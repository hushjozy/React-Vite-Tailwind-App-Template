"use client";
import { sample } from "@/lib/utils.js";
import { HeroParallax } from "../ui/hero-parallax.js";

export function HeroParallaxRender(
  products?: { title: string; link: string; thumbnail: string }[],
) {
  return <HeroParallax products={products?.length > 0 ? products : sample} />;
}
