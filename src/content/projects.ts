import type { Project, ArchitecturePattern } from "@/types";

export const FEATURED_PROJECT: Project = {
  id: "lendroa",
  title: "Lendroa",
  subtitle: "Multi-Tenant SaaS Loan Management Platform",
  description:
    "A comprehensive loan management platform built for financial institutions. Lendroa handles the complete loan lifecycle — from application and approval workflows to fund pool management and disbursement tracking — with enterprise-grade security and audit capabilities.",
  isFeatured: true,
  features: [
    "Multi-tenant architecture with schema-per-tenant PostgreSQL isolation",
    "JWT authentication with secure session management",
    "Role-based access control (RBAC) with granular permissions",
    "Complete loan workflow engine with configurable approval chains",
    "Fund pool management with allocation and tracking",
    "ImageKit integration for document and media management",
    "Brevo email integration for transactional communications",
    "Comprehensive activity logging and audit trail",
    "Event-driven architecture for scalable async processing",
    "Future OAuth support (Google & Apple) planned",
  ],
  technologies: [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "TypeORM",
    "Redis",
    "BullMQ",
    "JWT",
    "ImageKit",
    "Brevo",
    "AWS",
    "Docker",
  ],
  architecture: [
    {
      id: "web-client",
      label: "Web Client",
      description: "Next.js frontend with SSR, responsive UI, and real-time updates",
      layer: "frontend",
      connections: ["api-gateway"],
    },
    {
      id: "api-gateway",
      label: "API Gateway",
      description: "NestJS REST API with Swagger docs, rate limiting, and validation",
      layer: "backend",
      connections: ["auth-service", "loan-engine", "tenant-manager"],
    },
    {
      id: "auth-service",
      label: "Auth Service",
      description: "JWT authentication, session management, and RBAC enforcement",
      layer: "backend",
      connections: ["postgres", "redis"],
    },
    {
      id: "loan-engine",
      label: "Loan Engine",
      description: "Workflow orchestration, approval chains, and loan lifecycle management",
      layer: "backend",
      connections: ["postgres", "event-bus", "notification"],
    },
    {
      id: "tenant-manager",
      label: "Tenant Manager",
      description: "Schema-per-tenant provisioning, isolation, and configuration",
      layer: "backend",
      connections: ["postgres"],
    },
    {
      id: "event-bus",
      label: "Event Bus",
      description: "BullMQ queues for async processing, audit logging, and notifications",
      layer: "backend",
      connections: ["redis", "notification"],
    },
    {
      id: "notification",
      label: "Notification Service",
      description: "Brevo email, in-app notifications, and activity logging",
      layer: "integration",
      connections: ["brevo", "imagekit"],
    },
    {
      id: "postgres",
      label: "PostgreSQL",
      description: "Schema-per-tenant database with TypeORM migrations",
      layer: "database",
    },
    {
      id: "redis",
      label: "Redis",
      description: "Session store, caching layer, and BullMQ backend",
      layer: "database",
    },
    {
      id: "brevo",
      label: "Brevo",
      description: "Transactional email delivery and template management",
      layer: "integration",
    },
    {
      id: "imagekit",
      label: "ImageKit",
      description: "Document storage, image optimization, and CDN delivery",
      layer: "integration",
    },
  ],
  flows: [
    {
      id: "loan-application",
      title: "Loan Application Flow",
      description:
        "User submits application → Validation → Workflow engine assigns approvers → Multi-level approval chain → Fund pool allocation → Disbursement tracking → Audit log entry",
    },
    {
      id: "tenant-onboarding",
      title: "Tenant Onboarding",
      description:
        "Admin creates tenant → Schema provisioning → Default roles & permissions → Configuration setup → Welcome email via Brevo → Tenant dashboard access",
    },
    {
      id: "auth-flow",
      title: "Authentication Flow",
      description:
        "Login request → Credential validation → JWT generation → Session stored in Redis → RBAC permission check → Protected resource access",
    },
    {
      id: "event-processing",
      title: "Event Processing",
      description:
        "Business event triggered → Published to BullMQ → Worker processes async → Activity log updated → Notification dispatched → Audit trail recorded",
    },
  ],
  highlights: [
    "Handles 1000+ concurrent users per tenant",
    "Sub-200ms API response times with Redis caching",
    "Zero-downtime tenant schema migrations",
    "Complete audit trail for compliance requirements",
    "Event-driven decoupling for scalability",
  ],
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: "ai-agent-platform",
    title: "AI Agent Platform",
    subtitle: "MCP-Powered Agent Orchestration",
    description:
      "Custom AI agent platform with MCP server integration, tool calling, and workflow automation using n8n.",
    features: [
      "MCP server development and integration",
      "Multi-agent orchestration",
      "Custom tool calling framework",
      "n8n workflow automation",
    ],
    technologies: ["TypeScript", "MCP", "n8n", "OpenAI", "Node.js"],
    architecture: [],
    flows: [],
    highlights: [],
  },
  {
    id: "mobile-commerce",
    title: "Mobile Commerce App",
    subtitle: "Cross-Platform E-Commerce",
    description:
      "Full-featured e-commerce mobile application with payment integration, push notifications, and real-time order tracking.",
    features: [
      "React Native cross-platform development",
      "Payment gateway integration",
      "Push notification system",
      "Real-time order tracking",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "FCM"],
    architecture: [],
    flows: [],
    highlights: [],
  },
];

export const ARCHITECTURE_PATTERNS: ArchitecturePattern[] = [
  {
    id: "clean",
    title: "Clean Architecture",
    description:
      "Separation of concerns with dependency inversion, ensuring business logic independence from frameworks and UI.",
    icon: "Layers",
    useCases: ["Enterprise applications", "Long-term maintainability", "Testable codebases"],
  },
  {
    id: "event-driven",
    title: "Event-Driven Architecture",
    description:
      "Loosely coupled services communicating through events, enabling scalability and resilience.",
    icon: "Zap",
    useCases: ["Async job processing", "Notification systems", "Audit logging"],
  },
  {
    id: "multi-tenant",
    title: "Multi-Tenant SaaS",
    description:
      "Schema-per-tenant isolation ensuring data security, compliance, and independent tenant scaling.",
    icon: "Building",
    useCases: ["Multi-tenant platforms", "B2B SaaS products", "Enterprise software"],
  },
  {
    id: "microservices",
    title: "Microservices",
    description:
      "Independently deployable services with dedicated databases, enabling team autonomy and technology diversity.",
    icon: "Network",
    useCases: ["Large-scale platforms", "Team scaling", "Independent deployments"],
  },
];
