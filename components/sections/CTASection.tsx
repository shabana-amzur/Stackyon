'use client';

import Link from 'next/link';
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
      <div className="absolute inset-x-0 top-0 h-px bg-gray-800" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-800" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
        <Reveal animation="fade-up" duration={950} delay={120}>
          <h2 className="text-4xl md:text-[40px] font-medium leading-tight text-white">
            See Stackyon in action.
            <br className="hidden md:block" />
            Build smarter, modernize faster,
            <br className="hidden md:block" />
            automate intelligently
          </h2>
        </Reveal>

        <Reveal animation="fade-up" duration={1000} delay={220}>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/demo" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#12efeb] via-[#3e7ae5] to-[#523bdc] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
              <div className="relative flex items-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-[#12efeb] via-[#3e7ae5] to-[#523bdc] px-8 py-3.5 text-base font-medium text-white transition-all duration-500 bg-[length:200%_100%] bg-left hover:bg-right">
                Get Started
                <LinkIcon className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-transparent border border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white hover:text-black"
            >
              Book a Demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
