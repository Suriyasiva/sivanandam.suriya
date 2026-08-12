"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ARCHITECTURE_PATTERNS } from "@/content/projects";

export function ArchitectureShowcaseSection() {
  return (
    <section id="architecture" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Architecture"
          title="System Design Patterns"
          description="Scalable architectures for enterprise-grade applications"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ARCHITECTURE_PATTERNS.map((pattern, index) => (
            <ScrollReveal key={pattern.id} delay={index * 0.1}>
              <GlassCard className="h-full p-6 lg:p-8" glow="emerald">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Icon name={pattern.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pattern.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {pattern.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pattern.useCases.map((useCase) => (
                    <Badge key={useCase} variant="outline">
                      {useCase}
                    </Badge>
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
