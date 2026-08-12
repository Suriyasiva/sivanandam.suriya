"use client";

import { useCallback, useRef } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
}

export function useTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((event.clientY - centerY) / (rect.height / 2)) * -intensity;
      const rotateY = ((event.clientX - centerX) / (rect.width / 2)) * intensity;

      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}

export function getTiltStyle(values: TiltValues) {
  return {
    transform: `perspective(1000px) rotateX(${values.rotateX}deg) rotateY(${values.rotateY}deg)`,
  };
}
