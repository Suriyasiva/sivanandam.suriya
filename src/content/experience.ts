import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Software Engineer II",
    company: "TESARK Technologies",
    period: "Aug 2022 — Present",
    location: "India",
    description: [
      "Lead end-to-end development of multi-tenant SaaS platforms with schema-per-tenant PostgreSQL architecture.",
      "Architect and implement event-driven systems with BullMQ queues, Redis caching, and comprehensive audit trails.",
      "Build AI-powered features integrating LLMs, MCP servers, and custom agent workflows for production use cases.",
      "Design and ship REST APIs with Swagger documentation, JWT authentication, RBAC, and session management.",
      "Deploy and maintain cloud infrastructure on AWS with Docker, CI/CD pipelines, and CloudWatch monitoring.",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "BullMQ",
      "TypeORM",
    ],
  },
  {
    id: "exp-2",
    role: "Trainee Engineer",
    company: "TESARK Technologies",
    period: "May 2022 — Jul 2022",
    location: "India",
    description: [
      "Completed structured training in full-stack development covering frontend, backend, and database fundamentals.",
      "Built and contributed to internal projects using React, Node.js, and REST APIs under senior engineer guidance.",
      "Learned engineering best practices including code reviews, Git workflows, and agile delivery processes.",
      "Gained hands-on experience with TypeScript, API integration, and responsive UI implementation.",
    ],
    technologies: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Git",
    ],
  },
];

export const EXPERIENCE_TIMELINE = EXPERIENCES.map((exp) => ({
  name: exp.company,
  role: exp.role,
  period: exp.period,
  value: exp.id === "exp-1" ? 100 : 40,
}));
