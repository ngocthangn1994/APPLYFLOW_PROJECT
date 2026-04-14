import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ApplyFlow | AI + Human Job Concierge",
    template: "%s | ApplyFlow",
  },
  description:
    "Premium AI + human job application concierge with smarter workflows, application tracking, resume intelligence, and white-glove execution.",
  keywords: [
    "ApplyFlow",
    "job application platform",
    "AI job concierge",
    "job search SaaS",
    "application tracker",
    "resume optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_38%,#ffffff_100%)]" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.28]" />
          {children}
        </div>
      </body>
    </html>
  );
}
