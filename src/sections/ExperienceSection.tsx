"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCES } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building impactful products across the full stack"
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:block lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-8 md:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-background md:block lg:left-1/2">
                    <div className="absolute inset-1 rounded-full bg-emerald-500" />
                  </div>

                  <div className="md:pl-16 lg:w-1/2 lg:pl-0">
                    <GlassCard className="p-6 lg:p-8" glow="emerald">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-emerald-400">
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-sm text-gray-500">
                            · {exp.location}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-1 text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="mb-4 text-lg text-gold">{exp.company}</p>

                      <ul className="mb-6 space-y-2">
                        {exp.description.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-gray-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
