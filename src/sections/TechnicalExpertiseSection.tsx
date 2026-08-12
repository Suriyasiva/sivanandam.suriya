"use client";

import dynamic from "next/dynamic";

import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  SKILL_GROUPS,
  SKILL_CHART_DATA,
  TECH_DISTRIBUTION,
} from "@/content/skills";

const SkillRadarChart = dynamic(
  () => import("@/features/charts/SkillRadarChart").then((m) => m.SkillRadarChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

const TechBarChart = dynamic(
  () => import("@/features/charts/TechBarChart").then((m) => m.TechBarChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

function ChartSkeleton() {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
    </div>
  );
}

export function TechnicalExpertiseSection() {
  return (
    <section id="expertise" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Technical Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit for building modern applications"
        />

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <GlassCard className="p-6 lg:p-8">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Skill Proficiency
              </h3>
              <SkillRadarChart data={SKILL_CHART_DATA} />
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard className="p-6 lg:p-8">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Technology Distribution
              </h3>
              <TechBarChart data={TECH_DISTRIBUTION} />
            </GlassCard>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal key={group.id} delay={index * 0.05}>
              <GlassCard className="h-full p-6" hover glow="emerald">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon name={group.icon} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-300 transition-colors hover:border-emerald-500/20 hover:text-emerald-400"
                    >
                      <Icon name={skill.icon} size={12} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
