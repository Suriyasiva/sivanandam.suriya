import type { Capability } from "@/types";

export const CAPABILITIES: Capability[] = [
  {
    id: "auth",
    title: "Authentication & Authorization",
    description:
      "JWT-based auth, OAuth integrations, session management, and role-based access control systems.",
    icon: "ShieldCheck",
  },
  {
    id: "rbac",
    title: "RBAC",
    description:
      "Granular permission systems with role hierarchies, policy enforcement, and tenant isolation.",
    icon: "KeyRound",
  },
  {
    id: "oauth",
    title: "OAuth (Google & Apple)",
    description:
      "Social login flows with secure token exchange, account linking, and provider management.",
    icon: "LogIn",
  },
  {
    id: "session",
    title: "Session Management",
    description:
      "Secure session handling with refresh tokens, device tracking, and concurrent session control.",
    icon: "Clock",
  },
  {
    id: "payment",
    title: "Payment Integration",
    description:
      "Payment gateway integrations with webhook handling, subscription billing, and transaction logging.",
    icon: "CreditCard",
  },
  {
    id: "api-security",
    title: "API Security",
    description:
      "Rate limiting, input validation, CORS policies, API key management, and security headers.",
    icon: "Lock",
  },
  {
    id: "background-jobs",
    title: "Background Jobs",
    description:
      "Async job processing with retry logic, dead letter queues, and job scheduling.",
    icon: "Cog",
  },
  {
    id: "bullmq",
    title: "BullMQ Queues",
    description:
      "Redis-backed job queues with priority handling, concurrency control, and monitoring.",
    icon: "ListOrdered",
  },
  {
    id: "caching",
    title: "Caching Strategies",
    description:
      "Multi-layer caching with Redis, in-memory caches, and CDN integration for optimal performance.",
    icon: "Zap",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Code splitting, lazy loading, query optimization, and bundle size reduction strategies.",
    icon: "Gauge",
  },
  {
    id: "logging",
    title: "Logging & Monitoring",
    description:
      "Structured logging, CloudWatch integration, Sentry error tracking, and observability dashboards.",
    icon: "LineChart",
  },
  {
    id: "push",
    title: "Push Notifications",
    description:
      "FCM and APNs integration with notification scheduling, targeting, and delivery tracking.",
    icon: "Bell",
  },
  {
    id: "notifications",
    title: "Notification Systems",
    description:
      "Multi-channel notifications via email, SMS, in-app, and push with template management.",
    icon: "Mail",
  },
  {
    id: "realtime",
    title: "Real-time Communication",
    description:
      "WebSocket implementations for live updates, chat systems, and collaborative features.",
    icon: "Radio",
  },
  {
    id: "media",
    title: "File & Media Management",
    description:
      "ImageKit integration, S3 storage, file upload pipelines, and media optimization.",
    icon: "Image",
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Mobile-first responsive layouts with adaptive components and cross-device compatibility.",
    icon: "MonitorSmartphone",
  },
  {
    id: "error-handling",
    title: "Error Handling",
    description:
      "Global error boundaries, graceful degradation, retry mechanisms, and user-friendly error states.",
    icon: "AlertTriangle",
  },
];
