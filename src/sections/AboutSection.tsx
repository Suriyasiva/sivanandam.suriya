"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
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

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="left">
            <GlassCard className="p-8 lg:p-10" glow="emerald">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                {PROFILE.summary}
              </p>
              <p className="text-base leading-relaxed text-gray-400">
                With over {PROFILE.experience} of experience at{" "}
                {PROFILE.company}, I bring a unique blend of frontend
                craftsmanship, backend architecture, and cloud infrastructure
                expertise. I thrive on solving complex problems and delivering
                solutions that scale.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <GlassCard className="p-8 lg:p-10">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {HIGHLIGHTS.map((highlight, index) => (
                  <ScrollReveal key={highlight} delay={index * 0.03}>
                    <Badge variant="emerald">{highlight}</Badge>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "4+" },
                  { label: "Projects Delivered", value: "25+" },
                  { label: "Technologies", value: "30+" },
                  { label: "npm Packages", value: "3" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
