"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#070C14] text-white select-none">
      <div className="absolute h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="relative flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
        <span className="font-sans text-3xl font-bold tracking-tight text-white">
          Welcome
        </span>
      </div>
    </div>
  );
}
