"use client";

import { ExternalLink, Package } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { NPM_PACKAGES } from "@/content/open-source";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Open Source"
          title="npm Packages"
          description="Contributing to the developer ecosystem"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NPM_PACKAGES.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <GlassCard className="group h-full p-6 lg:p-8" glow="gold">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Package size={24} />
                  </div>
                  {pkg.version && (
                    <Badge variant="outline">v{pkg.version}</Badge>
                  )}
                </div>

                <h3 className="mb-2 font-mono text-lg font-bold text-white">
                  {pkg.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {pkg.description}
                </p>

                {pkg.downloads && (
                  <p className="mb-4 text-xs text-gray-500">
                    {pkg.downloads} downloads
                  </p>
                )}

                <div className="flex gap-3">
                  {pkg.npmUrl && (
                    <a
                      href={pkg.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      npm <ExternalLink size={12} />
                    </a>
                  )}
                  {pkg.githubUrl && (
                    <a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-white"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
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
