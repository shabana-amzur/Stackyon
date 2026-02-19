'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

/**
 * HealthcareCTASection Component - Healthcare page call-to-action section
 * 
 * Features:
 * - Blue gradient background
 * - Centered layout with focused messaging
 * - Two green CTA buttons
 * - Reveal animations for smooth entrance
 */
export default function HealthcareCTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
        <Reveal animation="fade-up" duration={950} delay={150}>
          <h2 className="text-5xl md:text-6xl font-medium leading-tight text-white">
            From Fragmented Systems to Intelligent Healthcare Operations
          </h2>
        </Reveal>

        <Reveal animation="fade-up" duration={1000} delay={180}>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Stackyon is not a point solution or an AI add-on. It is an AI-native application platform that enables healthcare organizations to structure how workflows, decisions, and intelligence operate together, allowing systems to evolve as operational demands change.
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={1000} delay={220}>
          <div className="flex flex-col items-center gap-4 sm:flex-row mt-4">
            <Link 
              href="#solutions" 
              className="inline-flex items-center gap-2 rounded-lg bg-black hover:bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-black/50"
            >
              Explore Healthcare Use Cases
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-black hover:bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-black/50"
            >
              Book a Healthcare Demo
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
