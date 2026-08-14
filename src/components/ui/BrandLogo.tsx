"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BrandLogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  wordmark?: string;
}

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  wordmark = "Suriya",
}: BrandLogoProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex h-9 w-9 shrink-0 items-center justify-center",
          markClassName
        )}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden="true"
        >
          <motion.path
            d="M42.2 23.4c-.9-3.7-4.2-6.2-8.8-6.2-5.8 0-9.6 3.4-9.6 8.1 0 3.5 1.9 5.7 7.4 7.6l4.2 1.4c4.3 1.4 6.4 3.2 6.4 6.4 0 3.5-3.1 5.8-7.4 5.8-4.3 0-7.3-2.1-8.2-5.7l-5.1 1.1c1.3 5.8 6.4 9.4 13.3 9.4 8 0 13.2-4.5 13.2-11.1 0-5.1-2.8-8.1-9-10.2l-4.1-1.4c-3.8-1.3-5.4-2.8-5.4-5.4 0-2.9 2.6-4.8 6.2-4.8 3.4 0 5.8 1.7 6.5 4.6l5.4-1.6z"
            animate={
              prefersReducedMotion
                ? { fill: "#10B981" }
                : {
                    fill: ["#10B981", "#FFFFFF", "#34D399", "#10B981"],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </span>
      {showWordmark && (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight text-white",
            wordmarkClassName
          )}
        >
          {wordmark}
        </span>
      )}
    </span>
  );
}
