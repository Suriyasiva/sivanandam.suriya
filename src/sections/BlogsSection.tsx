"use client";

import { PenLine } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const UPCOMING_TOPICS = [
  "Building Multi-Tenant SaaS with Schema-per-Tenant PostgreSQL",
  "Event-Driven Architecture with BullMQ and Redis",
  "MCP Server Development for AI Agents",
  "Production-Ready NestJS Authentication Patterns",
  "Optimizing Next.js for Enterprise Applications",
];

export function BlogsSection() {
  return (
    <section id="blogs" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Blog"
          title="Technical Writing"
          description="Sharing knowledge and engineering insights"
        />

        <ScrollReveal>
          <GlassCard className="p-8 lg:p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
              <PenLine size={32} />
            </div>
            <Badge variant="gold" className="mb-4">
              Coming Soon
            </Badge>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Blog Launching Soon
            </h3>
            <p className="mx-auto mb-8 max-w-lg text-gray-400">
              I&apos;m preparing in-depth technical articles covering architecture
              patterns, AI engineering, and full-stack development best practices.
            </p>

            <div className="mx-auto max-w-2xl">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Upcoming Topics
              </h4>
              <div className="space-y-3">
                {UPCOMING_TOPICS.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
