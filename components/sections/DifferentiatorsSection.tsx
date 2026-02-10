'use client';

import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

/**
 * Comparison data showing Stackyon's advantages over competitors
 * Each comparison includes a title, competitor name, and key differentiators
 */
const comparisons = [
  {
    title: 'Stackyon vs Traditional Low-Code',
    competitor: 'Traditional Low-Code',
    bullets: [
      'AI agents embedded seamlessly',
      'Faster deployment cycles',
      'Handles highly custom logic without plugins',
    ],
  },
  {
    title: 'Stackyon vs Workflow Automation Tools',
    competitor: 'Workflow Automation Tools',
    bullets: [
      'Effortless UI configuration',
      'True end-to-end application development',
      'Not just workflows: real apps, real logic, real UI',
    ],
  },
  {
    title: 'Stackyon vs Custom Development',
    competitor: 'Custom Development',
    bullets: [
      '10× faster delivery',
      'Lower cost',
      'No reskilling or hiring required',
    ],
  },
];

/**
 * DifferentiatorsSection Component - Highlights competitive advantages
 * 
 * Displays comparison cards showing how Stackyon differs from:
 * 1. Traditional Low-Code platforms
 * 2. Workflow Automation Tools
 * 3. Custom Development
 * 
 * Features:
 * - Three-column responsive grid
 * - Gradient backgrounds with overlay effects
 * - Check icons for each differentiator point
 * - Staggered reveal animations
 * - Card hover effects
 * - Gradient text for section title
 * 
 * Each comparison card includes:
 * - Clear competitor context
 * - Bulleted list of advantages
 * - Visual check icons
 * - Gradient border and shadow
 * 
 * This section helps prospects understand Stackyon's
 * unique value proposition in the market.
 */
export default function DifferentiatorsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-[40px] font-medium text-white reveal-child" style={{ transitionDelay: '140ms' }}>
            Why to Choose Stackyon
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70 reveal-child" style={{ transitionDelay: '200ms' }}>
            Compare Stackyon head-to-head with the platforms you know. Every card calls out what stays manual elsewhere and just ships inside Stackyon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison, index) => (
            <Reveal
              key={comparison.title}
              animation="fade-up"
              duration={1100}
              delay={220 + index * 140}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-8 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-sky-500/5 group-hover:to-purple-500/10" />

                <div className="relative z-10 flex flex-col gap-6">
                  <header className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold text-white">{comparison.title}</h3>
                  </header>

                  <ul className="flex flex-1 flex-col gap-4 text-base text-white/80">
                    {comparison.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 leading-relaxed">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                          <Check className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <span className="text-white/80">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
