'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

/**
 * Google Sans font configuration using local font files
 */
const googleSans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-google-sans",
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
  const hideGlobalCTA = pathname === '/platform/agentic-ai-hub' || pathname === '/ai-native-healthcare';

  return (
    <html lang="en">
      <body className={`${googleSans.variable} font-sans antialiased`}>
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
