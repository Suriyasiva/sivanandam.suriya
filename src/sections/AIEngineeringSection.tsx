"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AI_HIGHLIGHTS } from "@/content/open-source";

export function AIEngineeringSection() {
  return (
    <section id="ai-engineering" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="AI Engineering"
          title="Intelligent Systems"
          description="Building the next generation of AI-powered applications"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AI_HIGHLIGHTS.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <GlassCard className="group h-full p-6 lg:p-8" glow="gold">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-gold/20 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} size={24} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <GlassCard className="mt-12 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  AI Integration Workflow
                </h3>
                <p className="mb-6 text-gray-400">
                  From prompt engineering to production deployment, I build
                  complete AI pipelines that integrate seamlessly with existing
                  systems.
                </p>
                <div className="space-y-3">
                  {[
                    "Design tool schemas & MCP server interfaces",
                    "Implement agent orchestration with memory",
                    "Build n8n workflows for automation",
                    "Deploy with observability & error handling",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl border border-white/[0.06] bg-background-tertiary/50 p-6 font-mono text-sm">
                <div className="mb-3 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
                </div>
                <pre className="overflow-x-auto text-gray-400">
                  <code>{`// MCP Tool Registration
server.tool("search_docs", {
  description: "Search documentation",
  parameters: z.object({
    query: z.string(),
    limit: z.number().optional()
  }),
  handler: async ({ query, limit }) => {
    const results = await searchIndex(query, limit);
    return { content: results };
  }
});`}</code>
                </pre>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
