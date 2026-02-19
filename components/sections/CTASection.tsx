'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';

/**
 * CTASection Component - Final call-to-action section
 * 
 * Encourages users to take the next step with the platform.
 * 
 * Features:
 * - Centered layout with focused messaging
 * - Two primary action buttons:
 *   1. "Book a Demo" - Primary CTA with gradient glow effect
 *   2. "Connect with Us" - Secondary CTA with subtle styling
 * - Decorative horizontal lines (top and bottom)
 * - Reveal animations for smooth entrance
 * - Hover effects on buttons (lift and enhanced glow)
 * 
 * Button styling:
 * - Primary: Gradient shadow, bold colors, icon included
 * - Secondary: Minimal border, subtle background
 * 
 * This section appears at the end of the homepage to
 * convert engaged visitors into leads or demo requests.
 */
export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/digital-information-technology-concept-man-use-cybersecurity-computers-protect-against-online.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
        <Reveal animation="fade-up" duration={950} delay={120}>
          <h2 className="text-4xl md:text-[40px] font-medium leading-tight text-white">
            See Dev Studio in action
          </h2>
        </Reveal>

        <Reveal animation="fade-up" duration={1000} delay={180}>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            See how teams design and evolve enterprise applications without rework.
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={1000} delay={220}>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/platform/dev-studio" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0033cc] to-[#0066ff] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
              <div className="relative flex items-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-[#0033cc] to-[#0066ff] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:opacity-90">
                Explore Dev Studio
                <LinkIcon className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="/platform/agentic-ai-hub"
              className="rounded-lg bg-transparent border border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white hover:text-black"
            >
              Explore Agentic AI Hub
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
