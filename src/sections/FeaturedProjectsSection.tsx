"use client";

import Image from "next/image";
import { ExternalLink, Plug } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_PROJECTS } from "@/content/projects";

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Featured Projects"
          title="Engineering Showcase"
          description="Production platforms and intelligent systems built with engineering excellence"
        />

        {/* Uniform Grid for All Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((proj, index) => (
            <ScrollReveal key={proj.id} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col justify-between p-6 lg:p-8" glow="emerald">
                <div>
                  {proj.logoUrl && (
                    <div className="mb-4 flex items-center">
                      <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-1 shadow-md">
                        <Image
                          src={proj.logoUrl}
                          alt={`${proj.title} logo`}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="mb-1 text-xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-emerald-400">{proj.subtitle}</p>
                  <p className="mb-5 text-sm leading-relaxed text-gray-300">
                    {proj.description}
                  </p>

                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">
                    Key Features
                  </h4>
                  <ul className="mb-6 space-y-2">
                    {proj.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div>
                    <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Core Stack
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {proj.thirdPartyServices && proj.thirdPartyServices.length > 0 && (
                    <div>
                      <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                        <Plug size={10} className="text-gold" /> Third-Party Integrations
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.thirdPartyServices.map((service) => (
                          <span
                            key={service}
                            className="rounded bg-gold/10 px-2.5 py-0.5 text-[11px] font-medium text-gold border border-gold/20"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {proj.links && (proj.links.github || proj.links.live) && (
                    <div className="flex gap-3 pt-1">
                      {proj.links.github && (
                        <a
                          href={proj.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white"
                        >
                          GitHub <ExternalLink size={12} />
                        </a>
                      )}
                      {proj.links.live && (
                        <a
                          href={proj.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
                        >
                          Live Demo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
