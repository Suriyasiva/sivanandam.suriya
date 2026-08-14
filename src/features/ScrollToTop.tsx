"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const SHOW_AFTER_PX = 480;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          className="group fixed right-0 top-[72%] z-40 flex origin-top cursor-pointer items-center gap-2 rounded-l-2xl border border-r-0 border-white/10 bg-[#0B1220]/85 px-3 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:top-1/2 md:-translate-y-1/2"
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, x: 40, rotate: 0 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  x: 0,
                  rotate: [0, 2.4, -1.8, 1.2, 0],
                }
          }
          exit={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.15 }
              : {
                  opacity: { duration: 0.28 },
                  x: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                  rotate: {
                    duration: 1.6,
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }
          }
          whileHover={prefersReducedMotion ? undefined : { x: -4 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
        >
          <span className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 -translate-y-full bg-gradient-to-b from-transparent via-emerald-400/70 to-emerald-400/20" />
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-[18px] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />

          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUp size={18} />
          </span>

          <span className="hidden pr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-300 [writing-mode:vertical-rl] rotate-180 sm:block">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
