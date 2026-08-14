"use client";

import { Mail, Heart } from "lucide-react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

import { FOOTER_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/content/profile";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-background-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <BrandLogo wordmark={PROFILE.name} />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Full Stack Software Engineer crafting exceptional digital
              experiences with engineering excellence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-emerald-500/30 hover:text-emerald-400"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-emerald-500/30 hover:text-emerald-400"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-emerald-500/30 hover:text-emerald-400"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Built with <Heart size={14} className="text-emerald-500" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
