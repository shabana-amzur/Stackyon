import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Stackyon",
  description: "High-performance React website with SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Header />
          <main className="flex-1">{children}</main>
          <Reveal animation="fade-up" duration={850} delay={140} className="w-full">
            <Footer />
          </Reveal>
        </div>
      </body>
    </html>
  );
}
