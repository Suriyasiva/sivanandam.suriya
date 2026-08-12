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
    { label: "GitHub", href: "https://github.com/Suriyasiva" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/suriya-s-9ba383220/" },
    { label: "Email", href: "mailto:sivanandam.suriya@gmail.com" },
  ],
} as const;
