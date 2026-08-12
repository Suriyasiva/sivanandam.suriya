"use client";

import { BookOpen, ExternalLink } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/content/blogs";

export function BlogsSection() {
  return (
    <section id="blogs" className="relative px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Technical Writing"
          title="Articles & Insights"
          description="In-depth articles covering AI engineering, prompt design, and system architecture"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {BLOG_POSTS.map((blog, index) => (
            <ScrollReveal
              key={blog.id}
              delay={index * 0.1}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.1rem)] flex flex-col"
            >
              <GlassCard className="group flex h-full flex-col justify-between p-6 lg:p-8" glow="emerald">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-110">
                      <BookOpen size={24} />
                    </div>
                    <Badge variant="outline" className="text-emerald-400 border-emerald-500/20 bg-emerald-500/5">
                      {blog.platform}
                    </Badge>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                    {blog.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {blog.description}
                  </p>
                </div>

                <div>
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400 border border-white/[0.06]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Read Article <ExternalLink size={14} />
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
