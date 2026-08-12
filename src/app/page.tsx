import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { TechnicalExpertiseSection } from "@/sections/TechnicalExpertiseSection";
import { EngineeringCapabilitiesSection } from "@/sections/EngineeringCapabilitiesSection";
import { AIEngineeringSection } from "@/sections/AIEngineeringSection";
import { ArchitectureShowcaseSection } from "@/sections/ArchitectureShowcaseSection";
import { FeaturedProjectsSection } from "@/sections/FeaturedProjectsSection";
import { OpenSourceSection } from "@/sections/OpenSourceSection";
import { BlogsSection } from "@/sections/BlogsSection";
import { ResumeSection } from "@/sections/ResumeSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechnicalExpertiseSection />
      <EngineeringCapabilitiesSection />
      <AIEngineeringSection />
      <ArchitectureShowcaseSection />
      <FeaturedProjectsSection />
      <OpenSourceSection />
      <BlogsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
