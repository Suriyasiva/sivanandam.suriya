import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

import { Navbar } from "@/features/Navbar";
import { Footer } from "@/features/Footer";
import { ScrollProgress } from "@/features/ScrollProgress";
import { CursorGlow } from "@/features/CursorGlow";
import { PROFILE } from "@/content/profile";

import { InitialPreloader } from "@/features/InitialPreloader";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} | Full Stack Software Engineer`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.summary,
  keywords: [
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
    title: `${PROFILE.name} | Full Stack Software Engineer`,
    description: PROFILE.summary,
    siteName: `${PROFILE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Full Stack Software Engineer`,
    description: PROFILE.summary,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <InitialPreloader durationSeconds={3} />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
