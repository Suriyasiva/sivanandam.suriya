"use client";

import Image from "next/image";

import { HIGGSFIELD_ASSETS } from "@/content/assets";
import { cn } from "@/lib/utils";

interface AtmosphericBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

/**
 * Soft blended atmosphere for dark portfolio sections.
 * Prefers Higgsfield-generated assets when available; falls back to CSS mesh.
 */
export function AtmosphericBackground({
  variant = "hero",
  className,
}: AtmosphericBackgroundProps) {
  const asset =
    variant === "hero"
      ? HIGGSFIELD_ASSETS.heroBackground
      : HIGGSFIELD_ASSETS.sectionBackground;

  const hasRemoteImage = Boolean(asset.localPath || asset.remoteUrl);
  const imageSrc = asset.localPath ?? asset.remoteUrl ?? null;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {hasRemoteImage && imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={variant === "hero"}
          sizes="100vw"
          className="object-cover opacity-40"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[#0B1220]" />
          <div
            className={cn(
              "absolute -top-24 left-[-10%] h-[70vh] w-[70vw] rounded-full blur-[120px]",
              variant === "hero"
                ? "bg-emerald-500/[0.14]"
                : "bg-emerald-500/[0.08]"
            )}
          />
          <div
            className={cn(
              "absolute bottom-[-20%] right-[-5%] h-[55vh] w-[55vw] rounded-full blur-[110px]",
              variant === "hero" ? "bg-gold/[0.10]" : "bg-gold/[0.06]"
            )}
          />
          <div className="absolute top-1/3 right-1/4 h-[40vh] w-[40vw] rounded-full bg-emerald-400/[0.05] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 50% at 20% 30%, rgba(16,185,129,0.18), transparent 55%),
                radial-gradient(ellipse 70% 45% at 80% 70%, rgba(212,175,55,0.12), transparent 50%),
                radial-gradient(ellipse 60% 40% at 50% 100%, rgba(16,185,129,0.08), transparent 45%)
              `,
            }}
          />
        </>
      )}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/40 via-transparent to-[#0B1220]/80" />
    </div>
  );
}
