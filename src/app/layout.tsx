import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import "@fontsource/bai-jamjuree/400.css";
import "@fontsource/bai-jamjuree/500.css";
import "@fontsource/bai-jamjuree/600.css";
import "@fontsource/bai-jamjuree/700.css";

import { Navbar } from "@/features/Navbar";
import { Footer } from "@/features/Footer";
import { ScrollProgress } from "@/features/ScrollProgress";
import { CursorGlow } from "@/features/CursorGlow";
import { ScrollToTop } from "@/features/ScrollToTop";
import { DottedBackground } from "@/features/DottedBackground";
import { PROFILE } from "@/content/profile";

import { InitialPreloader } from "@/features/InitialPreloader";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} | Senior Software Engineer`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.summary,
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI Engineering",
    "NestJS",
    "PostgreSQL",
    "AWS",
    PROFILE.name,
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${PROFILE.name} | Senior Software Engineer`,
    description: PROFILE.summary,
    siteName: `${PROFILE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Senior Software Engineer`,
    description: PROFILE.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "64x64" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <InitialPreloader durationSeconds={3} />
        <DottedBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
