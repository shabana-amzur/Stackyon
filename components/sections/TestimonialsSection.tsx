'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

/**
 * Array of customer testimonials with quotes and attribution
 */
const testimonials = [
  {
    quote:
      'With Stackyon, our web and mobile platforms are stable and easy to manage and even non-technical users can make updates without extra costs.',
    name: 'Lisa Jackson',
    company: 'NSTRC',
    image: '/images/testimonials/lisa-jackson.png',
  },
  {
    quote:
      'Stackyon completely automated our prescription routing, making operations real-time and seamless at a national scale.',
    name: 'Srini Kalla',
    company: 'Wellgistics Health',
    image: '/images/testimonials/srini-kalla.png',
  },
];

/**
 * TestimonialsSection Component - Displays customer success stories
 * 
 * Features:
 * - Light background (white) contrasting with dark sections
 * - Two-column responsive grid
 * - Quote icons for visual hierarchy
 * - Customer photos with attribution
 * - Gradient text for section title
 * - Card hover effects (lift and shadow)
 * - Staggered reveal animations
 * 
 * Each testimonial card includes:
 * - Decorative quote icon
 * - Customer quote
 * - Profile image
 * - Name and company
 */
export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-35">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.12),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)', backgroundSize: '34px 34px' }} aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col gap-16 px-4">
        <header className="flex flex-col items-center gap-6 text-center">

          <Reveal animation="fade-up" duration={950} delay={140}>
            <h2 className="text-4xl md:text-[40px] font-medium leading-tight text-white">
              Client Testimonials
            </h2>
          </Reveal>
          <Reveal animation="fade-up" duration={950} delay={200}>
            <p className="max-w-2xl text-lg text-white/70">
              Trusted by enterprises solving complex workflows, modernization challenges, and AI-driven decisioning.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full max-w-[1360px] gap-8 md:mx-auto lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              animation="fade-up"
              duration={1050}
              delay={220 + index * 140}
              className="h-full"
            >
              <article
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-10 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)] overflow-hidden"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-sky-500/5 group-hover:to-purple-500/10" />
                <div className="relative z-10 flex flex-col gap-8">
                  <svg
                    className="h-9 w-9 text-white"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 20c0-6 2.9-10.9 8.6-14.5l2.1 3.1c-3.7 2.1-5.7 5.2-5.5 8.8H21v14h-13V20Zm16 0c0-6 2.9-10.9 8.6-14.5l2.1 3.1c-3.7 2.1-5.7 5.2-5.5 8.8H37v14H24V20Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="text-xl font-medium leading-relaxed text-white/85">
                    {testimonial.quote}
                  </p>
                </div>

                <footer className="relative z-10 mt-10">
                  {testimonial.image && (
                    <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-inner">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{testimonial.company}</p>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fade-up" duration={950} delay={300}>
          <div className="mt-4 flex justify-center">
            <a href="/case-studies" className="relative group">
              <div className="absolute inset-0 bg-[#3e7ae5] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
              <div className="relative flex items-center gap-2 rounded-lg border border-transparent bg-[#3e7ae5] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-[#5a8df0]">
                Success Stories
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
