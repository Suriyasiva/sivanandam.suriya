import type { Project, ArchitecturePattern } from "@/types";

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "lendora",
    title: "Lendora - Multi-Tenant Money Lending Platform",
    subtitle: "The architecture of wealth — intelligent loan management and debt tracking.",
    description:
      "Lendora is a comprehensive multi-tenant money lending and loan management platform designed to streamline loan origination, debtor onboarding, repayment tracking, and agent operations. Built with Next.js 15 on the frontend and NestJS with PostgreSQL on the backend, it utilizes a custom loan calculation engine (@suriyasiva/ml-loan-engine) alongside multi-tenant schema isolation to ensure security, compliance, and real-time financial tracking.",
    isFeatured: true,
    logoUrl: "/images/lendora-logo.png",
    features: [
      "Multi-Tenant Architecture: Isolated database schema-per-tenant architecture providing strict data privacy and customization for lending organizations.",
      "Automated Loan Engine & Contracts: Custom calculation engine for interest, repayment schedules, and penalty logic, paired with digital loan contract generation and lifecycle management.",
      "KYC & Bank Verification: Streamlined identity and bank account verification workflows using Setu Account Aggregator (AA) APIs.",
      "Repayment & Fund Management: Automated transaction management, payment tracking, and gateway integration powered by Razorpay.",
      "Document Management & Notifications: Cloud storage for KYC/loan documents via ImageKit and automated email alerts delivered through Brevo.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "NextAuth.js",
      "Zustand",
      "ApexCharts",
    ],
    thirdPartyServices: [
      "ImageKit",
      "Brevo",
      "Razorpay",
      "Setu (Account Aggregator)",
      "AWS RDS",
      "OpenAI",
    ],
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "blog-smith",
    title: "Blog Smith",
    subtitle: "AI-Powered Multi-Agent Blog Generation Platform",
    description:
      "Blog Smith solves the challenge of transforming unstructured, informal thought dumps into structured, publication-ready technical blog posts complete with prose, interactive UI widgets, and AI-generated imagery. Built with NestJS and Next.js, it employs a 10-node LangGraph multi-agent pipeline and PostgreSQL pgvector RAG to enforce brand voice, narrative pacing, and editorial quality.",
    isFeatured: false,
    features: [
      "10-Node LangGraph Multi-Agent Pipeline: Coordinates specialized AI agents (Concept Extractor, Outline Generator, Section Writer, Component Writer, Image Planner, Editor, Title Generator) with Zod validation.",
      "Style RAG with Vector Search: Embeds reference articles with OpenAI embeddings and performs semantic similarity search in PostgreSQL via pgvector for precise tone matching.",
      "Real-Time Server-Sent Events (SSE): Streams live agent state updates and progression milestones directly to the frontend interface.",
      "Automated Media & CDN Integration: Generates contextual images using OpenAI DALL-E models and uploads optimized assets to ImageKit CDN.",
      "Dynamic Block Rendering & PDF Export: Renders structured document blocks, interactive React components, and formatted Markdown in Next.js 16 with client-side PDF export.",
    ],
    technologies: [
      "NestJS",
      "Next.js 16",
      "TypeScript",
      "LangChain / LangGraph",
      "PostgreSQL (pgvector)",
      "TypeORM",
      "BullMQ / Redis",
      "Tailwind CSS v4",
      "React 19",
      "Framer Motion",
    ],
    thirdPartyServices: ["OpenAI", "ImageKit"],
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "humaize-sql",
    title: "humaizeSQL",
    subtitle: "Natural Language Database Interaction & Safe Query Execution Platform",
    description:
      "humaizeSQL enables users to query databases using natural language without writing SQL or risking administrative access to sensitive production data. Built with a decoupled architecture (Next.js & NestJS), it utilizes a dual-database design with client-side RSA credential encryption, LLM-driven schema summarization, and AST-based query validation to enforce strict read-only execution.",
    isFeatured: false,
    features: [
      "Natural Language to SQL/MQL Translation Pipeline powered by OpenAI LLM with automatic schema context injection and table summarization.",
      "Multi-Database Adapter Layer supporting PostgreSQL, MongoDB, and MySQL with dynamic read-only user provisioning.",
      "End-to-End Credential Encryption using client-side RSA public key encryption and server-side AES-256-GCM at-rest encryption.",
      "AST-based Query Validation & Guardrails utilizing node-sql-parser to enforce read-only execution, prevent data mutation, and cap row limits.",
      "Interactive Visual Schema Explorer built with React Flow (@xyflow/react) alongside a Claude-style streaming chat interface.",
    ],
    technologies: [
      "Next.js 15",
      "NestJS 10",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Tailwind CSS",
      "TanStack Query",
      "React Flow",
      "Node.js",
    ],
    thirdPartyServices: ["OpenAI", "Supabase"],
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "rag-knowledge-base",
    title: "RAG Knowledge Base & Chat Engine",
    subtitle: "Full-Stack Retrieval-Augmented Generation Platform & Vector Search",
    description:
      "A full-stack RAG application built as a TypeScript monorepo using Next.js 16 (App Router) and NestJS 11. It ingests and parses text from files (PDF, DOCX, CSV, MD, TXT) and web URLs, splits content into indexed chunks, and generates 1536-dimensional embeddings with OpenAI stored in PostgreSQL via pgvector for semantic similarity search.",
    isFeatured: false,
    features: [
      "Multi-Format Document Extraction: Parses text from PDFs (with page-level rendering via pdf-parse), DOCX (via Mammoth), CSV, Markdown, raw text, and HTTP/HTTPS URLs.",
      "Text Cleaning & Custom Chunking: Normalizes whitespace, cleans text, and splits content into indexed chunks with configurable overlap and metadata tracking.",
      "Vector Storage & Similarity Search: Utilizes PostgreSQL with the pgvector extension to store 1536-dim embeddings and perform vector cosine similarity searches.",
      "Context-Grounded Conversational AI: Injects retrieved document chunks as strict context into OpenAI GPT-4o-mini chat completion prompts with source chunk attributions.",
      "Asynchronous Client Upload Queue: Integrates a React upload queue provider and ImageKit cloud service for asynchronous file upload authentication and management.",
    ],
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Tailwind CSS",
      "Turborepo",
      "pnpm",
    ],
    thirdPartyServices: ["OpenAI", "ImageKit"],
    links: {
      github: null,
      live: null,
    },
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
