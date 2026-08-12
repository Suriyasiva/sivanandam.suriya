import type { OpenSourcePackage } from "@/types";

export const NPM_PACKAGES: OpenSourcePackage[] = [
  {
    id: "nest-header-context",
    name: "nest-header-context",
    description:
      "NestJS module and interceptor for asynchronous header context propagation across request execution flows using Node.js AsyncLocalStorage.",
    githubUrl: "https://github.com/Suriyasiva/nest-header-context",
    version: "0.1.0",
  },
  {
    id: "ai-core",
    name: "ai-core",
    description:
      "Unified AI client facade featuring provider abstraction, structured output validation with Zod, retry management, and timeout control.",
    githubUrl: "https://github.com/Suriyasiva/ai-core",
    version: "1.0.4",
  },
];

export const GITHUB_STATS = {
  username: "Suriyasiva",
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
