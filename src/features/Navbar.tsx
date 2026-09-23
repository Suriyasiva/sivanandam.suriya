"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/constants/navigation";
import { PROFILE } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300",
          "bg-background/95 backdrop-blur-xl border-b border-white/[0.06]",
          isScrolled && "shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        )}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-16 lg:px-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex min-w-0 items-center gap-2.5 cursor-pointer"
            aria-label="Go to top"
          >
            <BrandLogo
              className="group-hover:opacity-95 min-w-0"
              markClassName="h-8 w-8"
              showWordmark={false}
            />
            <span className="min-w-0 text-left">
              <span className="block truncate text-sm font-semibold leading-tight text-white sm:text-base">
                {PROFILE.name}
              </span>
              <span className="block truncate text-[10px] leading-tight text-emerald-400 sm:text-xs">
                {PROFILE.role}
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "group relative px-4 py-2 text-sm transition-colors cursor-pointer",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-emerald-500 transition-all duration-300",
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Get in Touch
            </Button>
          </div>

          <button
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:text-white md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 pt-16">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-2xl font-medium cursor-pointer",
                    activeSection === item.href.replace("#", "")
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
              >
                <Button onClick={() => handleNavClick("#contact")}>
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
