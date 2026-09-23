"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "Welcome", lang: "English" },
];

interface PreloaderProps {
  durationSeconds?: number;
}

export function InitialPreloader({ durationSeconds }: PreloaderProps = {}) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (index === GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 750);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 320);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070C14] text-white select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

          {/* Centered Greeting Text */}
          <div className="relative flex items-center justify-center h-24 overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                <span className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-white">
                  {GREETINGS[index].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Subtext */}
          <div className="absolute bottom-12 flex items-center gap-2 font-mono text-xs text-gray-500 tracking-widest uppercase">
            <span>S. SURIYA</span>
            <span>•</span>
            <span>PORTFOLIO</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
