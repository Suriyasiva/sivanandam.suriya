"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RotatingTitlesProps {
  titles: readonly string[];
}

export function RotatingTitles({ titles }: RotatingTitlesProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? titles[0] : "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = titles[index];
    const isComplete = text === current;
    const isEmpty = text.length === 0;

    let timeoutMs = isDeleting ? 28 : 52;
    if (isComplete && !isDeleting) timeoutMs = 1600;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }
        setText(current.slice(0, text.length + 1));
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      setText(current.slice(0, text.length - 1));
    }, timeoutMs);

    return () => window.clearTimeout(timeout);
  }, [index, isDeleting, prefersReducedMotion, text, titles]);

  if (prefersReducedMotion) {
    return (
      <p className="text-sm text-emerald-400 md:text-base">{titles[0]}</p>
    );
  }

  return (
    <p className="flex min-h-[1.75rem] items-center justify-center text-sm text-emerald-400 md:justify-start md:text-base">
      <span>{text}</span>
      <motion.span
        className="ml-0.5 inline-block h-4 w-[2px] bg-emerald-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        aria-hidden="true"
      />
    </p>
  );
}
