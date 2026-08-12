export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  thirdPartyServices?: string[];
  logoUrl?: string;
  architecture?: ArchitectureNode[];
  flows?: FlowStep[];
  highlights?: string[];
  isFeatured?: boolean;
  links?: {
    live?: string | null;
    github?: string | null;
  };
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  layer: "frontend" | "backend" | "database" | "infrastructure" | "integration";
  connections?: string[];
}

export interface FlowStep {
  id: string;
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ArchitecturePattern {
  id: string;
  title: string;
  description: string;
  icon: string;
  useCases: string[];
}

export interface OpenSourcePackage {
  id: string;
  name: string;
  description: string;
  npmUrl?: string;
  githubUrl?: string;
  downloads?: string;
  version?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fullMark?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: string;
  tags?: string[];
  readTime?: string;
}
