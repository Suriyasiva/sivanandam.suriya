"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_PROJECT, OTHER_PROJECTS } from "@/content/projects";

export function FeaturedProjectsSection() {
  const project = FEATURED_PROJECT;

  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Featured Projects"
          title="Engineering Showcase"
          description="Production systems built with engineering excellence"
        />

        <ScrollReveal>
          <GlassCard className="overflow-hidden" glow="emerald">
            <div className="border-b border-white/[0.06] bg-gradient-to-r from-emerald-500/10 to-gold/5 p-6 lg:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge variant="gold" className="mb-3">
                    Flagship Project
                  </Badge>
                  <h3 className="text-3xl font-bold text-white lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg text-emerald-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
              <div>
                <p className="mb-6 leading-relaxed text-gray-300">
                  {project.description}
                </p>

                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                  Key Features
                </h4>
                <ul className="mb-6 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-gray-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="emerald">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Architecture
                </h4>
                <div className="mb-6 grid grid-cols-2 gap-2">
                  {project.architecture.slice(0, 6).map((node) => (
                    <div
                      key={node.id}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <div className="text-xs font-medium text-emerald-400">
                        {node.label}
                      </div>
                      <div className="mt-1 text-[10px] leading-relaxed text-gray-500">
                        {node.description}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Workflows
                </h4>
                <div className="space-y-3">
                  {project.flows.map((flow, i) => (
                    <div
                      key={flow.id}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/10 text-[10px] font-bold text-emerald-400">
                          {i + 1}
                        </span>
                        <span className="text-xs font-medium text-white">
                          {flow.title}
                        </span>
                      </div>
                      <p className="mt-1.5 pl-7 text-[11px] leading-relaxed text-gray-500">
                        {flow.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {project.highlights.length > 0 && (
              <div className="border-t border-white/[0.06] bg-white/[0.01] p-6 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </GlassCard>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {OTHER_PROJECTS.map((proj, index) => (
            <ScrollReveal key={proj.id} delay={index * 0.1}>
              <GlassCard className="h-full p-6 lg:p-8" hover glow="emerald">
                <h3 className="mb-1 text-xl font-bold text-white">
                  {proj.title}
                </h3>
                <p className="mb-4 text-sm text-emerald-400">{proj.subtitle}</p>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
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
