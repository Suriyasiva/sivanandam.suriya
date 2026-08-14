"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
  durationMs?: number;
}

export function CountUpStat({
  value,
  suffix = "",
  label,
  durationMs = 1200,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [durationMs, isInView, prefersReducedMotion, value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
    >
      <div className="text-2xl font-bold text-emerald-400">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
    </div>
  );
}
