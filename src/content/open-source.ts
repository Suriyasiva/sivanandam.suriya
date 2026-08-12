import type { OpenSourcePackage } from "@/types";

export const NPM_PACKAGES: OpenSourcePackage[] = [
  {
    id: "pkg-1",
    name: "@suriya/react-hooks",
    description:
      "Collection of production-ready React custom hooks for common patterns — debouncing, infinite scroll, local storage, and media queries.",
    npmUrl: "https://www.npmjs.com",
    githubUrl: "https://github.com",
    downloads: "2.5k/week",
    version: "1.2.0",
  },
  {
    id: "pkg-2",
    name: "@suriya/nest-utils",
    description:
      "Utility library for NestJS applications — decorators, guards, interceptors, and common middleware patterns.",
    npmUrl: "https://www.npmjs.com",
    githubUrl: "https://github.com",
    downloads: "1.8k/week",
    version: "2.0.1",
  },
  {
    id: "pkg-3",
    name: "@suriya/mcp-tools",
    description:
      "MCP server toolkit for building AI agent tools with TypeScript — schema validation, error handling, and tool registration.",
    npmUrl: "https://www.npmjs.com",
    githubUrl: "https://github.com",
    downloads: "950/week",
    version: "0.5.0",
  },
];

export const GITHUB_STATS = {
  username: "suriya-dev",
  repos: 42,
  followers: 128,
  contributions: 1247,
  stars: 89,
  pullRequests: 156,
  issues: 34,
};

export const AI_HIGHLIGHTS = [
  {
    id: "mcp",
    title: "MCP Server Development",
    description:
      "Building Model Context Protocol servers that expose tools, resources, and prompts for AI agent integration.",
    icon: "Plug",
  },
  {
    id: "agents",
    title: "AI Agent Orchestration",
    description:
      "Designing multi-agent systems with tool calling, memory management, and workflow coordination.",
    icon: "Bot",
  },
  {
    id: "n8n",
    title: "n8n Workflow Automation",
    description:
      "Creating automated workflows connecting AI models, APIs, databases, and notification systems.",
    icon: "GitMerge",
  },
  {
    id: "sdk",
    title: "AI SDK Development",
    description:
      "Publishing npm packages for AI integration — streaming responses, tool schemas, and error handling.",
    icon: "Package",
  },
  {
    id: "prompt",
    title: "Prompt Engineering",
    description:
      "Crafting effective system prompts, few-shot examples, and chain-of-thought patterns for reliable AI outputs.",
    icon: "MessageSquare",
  },
  {
    id: "llm",
    title: "LLM Integration",
    description:
      "Integrating OpenAI, Anthropic, and open-source models with production-grade error handling and caching.",
    icon: "Sparkles",
  },
];
