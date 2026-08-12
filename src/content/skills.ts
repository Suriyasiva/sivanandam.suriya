import type { SkillGroup } from "@/types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", icon: "Atom", proficiency: 95 },
      { name: "Next.js", icon: "Triangle", proficiency: 92 },
      { name: "Angular", icon: "Shield", proficiency: 85 },
      { name: "JavaScript", icon: "FileCode", proficiency: 95 },
      { name: "TypeScript", icon: "FileType", proficiency: 93 },
      { name: "HTML", icon: "Code", proficiency: 95 },
      { name: "CSS", icon: "Palette", proficiency: 90 },
      { name: "Tailwind CSS", icon: "Wind", proficiency: 92 },
      { name: "shadcn/ui", icon: "Component", proficiency: 88 },
      { name: "React Native", icon: "Smartphone", proficiency: 85 },
      { name: "Flutter", icon: "Layers", proficiency: 80 },
      { name: "Custom Hooks", icon: "Hook", proficiency: 90 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "Hexagon", proficiency: 93 },
      { name: "NestJS", icon: "Bird", proficiency: 90 },
      { name: "Express", icon: "Zap", proficiency: 88 },
      { name: "REST APIs", icon: "Globe", proficiency: 95 },
      { name: "WebSockets", icon: "Radio", proficiency: 85 },
      { name: "Swagger/OpenAPI", icon: "BookOpen", proficiency: 88 },
      { name: "TypeORM", icon: "Database", proficiency: 87 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "Database", proficiency: 90 },
      { name: "MongoDB", icon: "Leaf", proficiency: 85 },
      { name: "SQL", icon: "Table", proficiency: 88 },
      { name: "Supabase", icon: "Cloud", proficiency: 82 },
      { name: "Redis", icon: "HardDrive", proficiency: 85 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", icon: "CloudCog", proficiency: 85 },
      { name: "Docker", icon: "Container", proficiency: 88 },
      { name: "Git", icon: "GitBranch", proficiency: 92 },
      { name: "GitHub", icon: "Github", proficiency: 92 },
      { name: "CI/CD", icon: "Workflow", proficiency: 87 },
      { name: "CloudWatch", icon: "Activity", proficiency: 80 },
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    icon: "Brain",
    skills: [
      { name: "MCP", icon: "Plug", proficiency: 88 },
      { name: "AI Agents", icon: "Bot", proficiency: 90 },
      { name: "n8n", icon: "GitMerge", proficiency: 85 },
      { name: "Prompt Engineering", icon: "MessageSquare", proficiency: 92 },
      { name: "LLM Integration", icon: "Sparkles", proficiency: 90 },
      { name: "AI SDK Development", icon: "Package", proficiency: 87 },
      { name: "Tool Calling", icon: "Wrench", proficiency: 88 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "Building2",
    skills: [
      { name: "Clean Architecture", icon: "Layers", proficiency: 90 },
      { name: "Modular Architecture", icon: "Boxes", proficiency: 92 },
      { name: "Layered Architecture", icon: "Layers2", proficiency: 88 },
      { name: "Microservices", icon: "Network", proficiency: 85 },
      { name: "Event Driven", icon: "Zap", proficiency: 87 },
      { name: "SOA", icon: "Share2", proficiency: 82 },
      { name: "DDD", icon: "Target", proficiency: 80 },
      { name: "Micro Frontends", icon: "LayoutGrid", proficiency: 78 },
    ],
  },
];

export const SKILL_CHART_DATA = [
  { name: "Frontend", value: 92 },
  { name: "Backend", value: 90 },
  { name: "Database", value: 87 },
  { name: "Cloud", value: 85 },
  { name: "AI/ML", value: 88 },
  { name: "Architecture", value: 86 },
];

export const TECH_DISTRIBUTION = [
  { name: "TypeScript", value: 35 },
  { name: "React/Next.js", value: 25 },
  { name: "Node.js", value: 20 },
  { name: "Mobile", value: 10 },
  { name: "DevOps", value: 10 },
];
