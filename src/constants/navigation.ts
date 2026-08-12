export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai-engineering" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_LINKS = {
  navigation: NAV_ITEMS,
  social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:suriya@example.com" },
  ],
} as const;
