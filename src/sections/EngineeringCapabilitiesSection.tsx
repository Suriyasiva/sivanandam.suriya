"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAPABILITIES } from "@/content/capabilities";
import { useTilt } from "@/hooks/useTilt";

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof CAPABILITIES)[0];
  index: number;
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <ScrollReveal delay={index * 0.03}>
      <GlassCard
        ref={ref}
        className="h-full p-5 transition-transform duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        glow="emerald"
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <Icon name={capability.icon} size={20} />
        </div>
        <h3 className="mb-2 text-sm font-semibold text-white">
          {capability.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-400">
          {capability.description}
        </p>
      </GlassCard>
    </ScrollReveal>
  );
}

export function EngineeringCapabilitiesSection() {
  return (
    <section id="capabilities" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Engineering Capabilities"
          title="Production-Ready Features"
          description="Battle-tested patterns and implementations for enterprise applications"
        />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CAPABILITIES.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
