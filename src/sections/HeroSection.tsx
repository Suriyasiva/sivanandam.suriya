"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AtmosphericBackground } from "@/features/AtmosphericBackground";
import { MagneticButton } from "@/features/MagneticButton";
import { PROFILE } from "@/content/profile";
import { scrollToSection } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <AtmosphericBackground variant="hero" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="emerald" className="mb-6">
              {PROFILE.role} · {PROFILE.experience}
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block">{PROFILE.name}</span>
            <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PROFILE.titles.map((title) => (
              <Badge key={title} variant="outline">
                {title}
              </Badge>
            ))}
          </motion.div>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl lg:mx-0"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building exceptional digital products from architecture to deployment.
            Passionate about clean code, scalable systems, and AI-powered innovation.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton>
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={18} />
                Contact Me
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="ghost" size="lg" asChild>
                <a href={PROFILE.resumeUrl} download>
                  <Download size={18} />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-gold/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={PROFILE.photoUrl}
                alt={PROFILE.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-medium text-white">{PROFILE.name}</p>
                <p className="text-xs text-emerald-300">
                  {PROFILE.role} · {PROFILE.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-emerald-400 cursor-pointer"
        onClick={() => scrollToSection("about")}
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
