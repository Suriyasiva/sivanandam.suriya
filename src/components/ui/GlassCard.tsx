"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: "emerald" | "gold" | "none";
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard(
    { className, children, hover = true, glow = "none", ...props },
    ref
  ) {
    const prefersReducedMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
          hover &&
            "transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]",
          glow === "emerald" &&
            "hover:shadow-emerald-500/10 hover:border-emerald-500/20",
          glow === "gold" && "hover:shadow-gold/10 hover:border-gold/20",
          className
        )}
        whileHover={
          hover && !prefersReducedMotion
            ? { y: -4, transition: { duration: 0.3 } }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
