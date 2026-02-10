'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

/**
 * Inter font configuration for the application
 * Includes core weights (300, 400, 500, 600, 700) for typographic hierarchy
 */
const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * Application metadata for SEO
 */
// Note: metadata export removed due to 'use client' directive
// Metadata should be configured in page.tsx files instead

/**
 * RootLayout - Main layout wrapper for all pages
 * 
 * Provides consistent structure across the application:
 * - Inter font family
 * - Header navigation
 * - Main content area (flex-1 for full height)
 * - Global CTA block
 * - Footer
 * - Scroll to top button
 * 
 * The layout uses a flexbox column structure to ensure footer
 * stays at the bottom even on short pages.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideGlobalCTA = pathname === '/platform/dev-studio' || pathname === '/platform/agentic-ai-hub';

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Header />
          <main className="flex-1">{children}</main>
          {!hideGlobalCTA && <CTASection />}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
