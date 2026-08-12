export const COLORS = {
  background: "#0B1220",
  backgroundSecondary: "#111827",
  backgroundTertiary: "#1A2332",
  emerald: "#10B981",
  emeraldLight: "#34D399",
  emeraldDark: "#059669",
  gold: "#D4AF37",
  goldLight: "#E5C76B",
  goldDark: "#B8960C",
  textPrimary: "#F9FAFB",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  border: "rgba(255, 255, 255, 0.08)",
  glass: "rgba(255, 255, 255, 0.03)",
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
  },
  ease: [0.25, 0.46, 0.45, 0.94] as const,
} as const;
