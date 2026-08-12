"use client";

import { GitBranch, GitPullRequest, Star, Users } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GITHUB_STATS } from "@/content/open-source";
import { PROFILE } from "@/content/profile";

const STAT_ICONS = {
  repos: GitBranch,
  followers: Users,
  stars: Star,
  pullRequests: GitPullRequest,
};

export function GitHubStatsSection() {
  const stats = [
    { label: "Repositories", value: GITHUB_STATS.repos, key: "repos" as const },
    { label: "Followers", value: GITHUB_STATS.followers, key: "followers" as const },
    { label: "Total Stars", value: GITHUB_STATS.stars, key: "stars" as const },
    { label: "Pull Requests", value: GITHUB_STATS.pullRequests, key: "pullRequests" as const },
  ];

  return (
    <section id="github" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="GitHub"
          title="Open Source Activity"
          description="Contributing to the developer community"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const IconComponent = STAT_ICONS[stat.key];
            return (
              <ScrollReveal key={stat.label} delay={index * 0.08}>
                <GlassCard className="p-6 text-center" hover glow="emerald">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <IconComponent size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-8 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {GITHUB_STATS.contributions.toLocaleString()}+ Contributions
                </h3>
                <p className="text-gray-400">
                  Consistent open source contributions across personal projects,
                  npm packages, and community repositories.
                </p>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  View GitHub Profile →
                </a>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-background-tertiary/50 p-4">
                <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
                  {Array.from({ length: 52 * 7 }).map((_, i) => {
                    const intensity = ((i * 7 + 13) % 100) / 100;
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-sm"
                        style={{
                          backgroundColor:
                            intensity > 0.7
                              ? "#10B981"
                              : intensity > 0.4
                                ? "rgba(16, 185, 129, 0.5)"
                                : intensity > 0.2
                                  ? "rgba(16, 185, 129, 0.2)"
                                  : "rgba(255, 255, 255, 0.05)",
                        }}
                      />
                    );
                  })}
                </div>
                <p className="mt-3 text-right text-xs text-gray-500">
                  Contribution activity
                </p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
