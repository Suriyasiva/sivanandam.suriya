"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedUnderline({ children, className }: AnimatedUnderlineProps) {
  return (
    <span className={cn("group relative inline-block", className)}>
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-gold"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </span>
  );
}
