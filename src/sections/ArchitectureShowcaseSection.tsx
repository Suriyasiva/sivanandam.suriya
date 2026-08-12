"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ARCHITECTURE_PATTERNS } from "@/content/projects";

const LAYER_COLORS = {
  frontend: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  backend: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  database: "border-purple-500/30 bg-purple-500/10 text-purple-400",
  infrastructure: "border-orange-500/30 bg-orange-500/10 text-orange-400",
  integration: "border-gold/30 bg-gold/10 text-gold",
};

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

        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-12 p-8 lg:p-10">
            <h3 className="mb-8 text-center text-xl font-bold text-white">
              Lendroa System Architecture
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { layer: "frontend", label: "Presentation Layer", items: ["Next.js SSR", "Responsive UI", "Real-time Updates"] },
                { layer: "backend", label: "Application Layer", items: ["NestJS API", "Auth Service", "Loan Engine", "Event Bus"] },
                { layer: "database", label: "Data Layer", items: ["PostgreSQL", "Schema-per-Tenant", "Redis Cache"] },
                { layer: "integration", label: "Integration Layer", items: ["ImageKit CDN", "Brevo Email", "BullMQ Queues"] },
              ].map((group) => (
                <div
                  key={group.layer}
                  className={`rounded-xl border p-4 ${LAYER_COLORS[group.layer as keyof typeof LAYER_COLORS]}`}
                >
                  <h4 className="mb-3 text-sm font-semibold">{group.label}</h4>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs opacity-80">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
