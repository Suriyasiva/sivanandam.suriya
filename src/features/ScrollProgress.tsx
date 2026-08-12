"use client";

import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-emerald-500 via-emerald-400 to-gold"
      style={{ scaleX: progress }}
    />
  );
}
