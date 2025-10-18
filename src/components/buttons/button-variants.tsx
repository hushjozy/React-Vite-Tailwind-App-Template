"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Button Variant 1: Solid Primary with Arrow
export function ButtonSolidPrimary({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 font-medium text-background",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="relative z-10"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowRight className="h-4 w-4" />
      </motion.span>
    </motion.button>
  );
}

// Button Variant 2: Outline with Hover Fill
export function ButtonOutlineHover({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-full border border-foreground bg-black/50 px-6 py-3 font-medium text-foreground",
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-foreground"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 transition-colors group-hover:text-background">
        {children}
      </span>
    </motion.button>
  );
}

// Button Variant 3: Gradient Shimmer
export function ButtonGradientShimmer({
  children,
  className,
  icon: Icon = Sparkles,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: any }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center gap-2 overflow-hidden rounded-lg bg-foreground px-6 py-3 font-medium text-background",
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-200%", "200%"] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <Icon className="relative z-10 h-4 w-4" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Button Variant 4: 3D Elevated
export function Button3DElevated({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={cn(
        "rounded-lg bg-foreground px-6 py-3 font-medium text-background shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_6px_0_0_rgba(0,0,0,0.2)]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Button Variant 5: Icon Morph
export function ButtonIconMorph({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Send className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
}

// Button Variant 6: Pulse Success
export function ButtonPulseSuccess({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background",
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-lg bg-foreground"
        animate={{
          boxShadow: ["0 0 0 0 rgba(0,0,0,0.3)", "0 0 0 10px rgba(0,0,0,0)"],
        }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      />
      <Check className="relative z-10 h-4 w-4" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Button Variant 7: Magnetic
export function ButtonMagnetic({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full bg-foreground px-6 py-3 font-medium text-background",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Button Variant 8: Split Reveal
export function ButtonSplitReveal({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border-2 border-foreground px-6 py-3 font-medium text-foreground",
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-foreground"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0.5 }}
      />
      <span className="relative z-10 transition-colors group-hover:text-background">
        {children}
      </span>
    </motion.button>
  );
}
