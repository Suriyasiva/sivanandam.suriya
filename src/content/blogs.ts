import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "art-of-asking-questions",
    title: "The Art of Asking Questions",
    description:
      "Mastering effective communication, problem formulation, and structured querying techniques for software engineering and AI interactions.",
    url: "https://dev.to/suriya_siva/the-art-of-asking-questions-241l",
    platform: "DEV Community",
    tags: ["Prompt Engineering", "Communication", "AI"],
  },
  {
    id: "ai-understands-every-tool",
    title: "Imagine a World Where AI Understands Every Tool",
    description:
      "Exploring Model Context Protocol (MCP) and how standardized tool-calling interfaces empower AI agents across developer ecosystems.",
    url: "https://dev.to/suriya_siva/imagine-a-world-where-ai-understands-every-tool-3ln0",
    platform: "DEV Community",
    tags: ["MCP", "AI Agents", "Tool Calling"],
  },
  {
    id: "when-answers-miss-the-mark",
    title: "When Answers Miss the Mark",
    description:
      "Diagnosing why LLM responses fail, identifying context gaps, and practical strategies for constraining AI models for precise answers.",
    url: "https://dev.to/suriya_siva/when-answers-miss-the-mark-o9j",
    platform: "DEV Community",
    tags: ["LLMs", "AI Engineering", "Debugging"],
  },
  {
    id: "secret-behind-ai-prompt-success",
    title: "The Secret Behind AI Prompt Success",
    description:
      "Unlocking systematic prompt architecture techniques, role assignment, and chain-of-thought methods for reliable AI outcomes.",
    url: "https://dev.to/suriya_siva/the-secret-behind-ai-prompt-success-2jea",
    platform: "DEV Community",
    tags: ["Prompt Engineering", "LLM Integration", "AI"],
  },
  {
    id: "why-hallucinations-arent-just-an-llm-problem",
    title: "Why Hallucinations Aren't Just an LLM Problem",
    description:
      "Deconstructing root causes of AI hallucinations beyond model weights — including data quality, context truncation, and retrieval limits.",
    url: "https://dev.to/suriya_siva/why-hallucinations-arent-just-an-llm-problem-1hkn",
    platform: "DEV Community",
    tags: ["Hallucinations", "AI Architecture", "RAG"],
  },
];
