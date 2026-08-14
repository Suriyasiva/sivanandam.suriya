"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedNameProps {
  name?: string;
  lines?: string[];
  className?: string;
  delay?: number;
}

export function AnimatedName({
  name = "",
  lines,
  className,
  delay = 0.12,
}: AnimatedNameProps) {
  const prefersReducedMotion = useReducedMotion();
  const displayLines = lines ?? [name];
  const label = displayLines.join(" ");

  if (prefersReducedMotion) {
    return (
      <span className={cn("block", className)}>
        {displayLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  let charIndex = 0;

  return (
    <span className={cn("block antialiased", className)} aria-label={label}>
      {displayLines.map((line) => (
        <span key={line} className="block whitespace-nowrap">
          {line.split("").map((char) => {
            const index = charIndex;
            charIndex += 1;

            return (
              <motion.span
                key={`${line}-${index}`}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: delay + index * 0.04,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
