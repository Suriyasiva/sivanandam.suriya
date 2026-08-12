"use client";

import Image from "next/image";
import { Download, FileText } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PROFILE } from "@/content/profile";
import { EXPERIENCES } from "@/content/experience";

export function ResumeSection() {
  return (
    <section id="resume" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Resume"
          title="Professional Background"
          description="Download my complete resume or explore highlights below"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-1">
            <GlassCard className="sticky top-24 p-6 lg:p-8" glow="emerald">
              <div className="mb-6 text-center">
                <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-emerald-500/20">
                  <Image
                    src={PROFILE.photoUrl}
                    alt={PROFILE.photoAlt}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{PROFILE.name}</h3>
                <p className="text-sm text-emerald-400">{PROFILE.role}</p>
                <p className="mt-1 text-xs text-gray-500">{PROFILE.company}</p>
              </div>

              <div className="mb-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Experience</span>
                  <span className="text-white">{PROFILE.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location</span>
                  <span className="text-white">{PROFILE.location}</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href={PROFILE.resumeUrl} download>
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-6 lg:col-span-2">
            {EXPERIENCES.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <GlassCard className="p-6 lg:p-8">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-emerald-400" />
                    <span className="text-sm text-emerald-400">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="mb-4 text-gold">{exp.company}</p>
                  <ul className="mb-4 space-y-1.5">
                    {exp.description.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-gray-400">
                        • {item}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
