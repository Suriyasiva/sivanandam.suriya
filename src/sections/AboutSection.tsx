"use client";

import { Award, Briefcase, MapPin } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CountUpStat } from "@/components/ui/CountUpStat";
import { AtmosphericBackground } from "@/features/AtmosphericBackground";
import { HIGHLIGHTS, PROFILE } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:py-32">
      <AtmosphericBackground variant="section" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="Crafting Digital Excellence"
          description="Passionate about building products that make a difference"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          <ScrollReveal direction="left" className="h-full flex flex-col">
            <GlassCard className="flex h-full flex-col justify-between p-8 lg:p-10" glow="emerald">
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  <Badge variant="outline" className="inline-flex items-center gap-1.5 text-xs text-emerald-400 border-emerald-500/20 bg-emerald-500/5">
                    <Briefcase size={12} /> {PROFILE.role}
                  </Badge>
                  <Badge variant="outline" className="inline-flex items-center gap-1.5 text-xs text-gray-400 border-white/10 bg-white/5">
                    <MapPin size={12} /> {PROFILE.location}
                  </Badge>
                </div>

                <h3 className="mb-4 text-xl font-bold text-white">
                  Engineering Overview
                </h3>

                <p className="mb-6 text-base leading-relaxed text-gray-300">
                  {PROFILE.summary}
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  With over {PROFILE.experience} of engineering experience, I bring a unique blend of frontend
                  craftsmanship, backend architecture, and cloud infrastructure
                  expertise. I thrive on solving complex technical challenges and delivering
                  scalable, production-grade applications.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Award size={14} /> Full Stack & AI Engineering
                </span>
                <span>{PROFILE.experience} Experience</span>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1} className="h-full flex flex-col">
            <GlassCard className="flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <h3 className="mb-4 text-xl font-bold text-white">
                  Core Expertise & Competencies
                </h3>

                <div className="mb-8 flex flex-wrap gap-2">
                  {HIGHLIGHTS.map((highlight) => (
                    <Badge key={highlight} variant="emerald">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Key Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <CountUpStat value={4} suffix="+" label="Years Experience" />
                  <CountUpStat value={5} suffix="+" label="Production Platforms" />
                  <CountUpStat value={30} suffix="+" label="Core Stack Tools" />
                  <CountUpStat value={3} label="Published Packages" />
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
