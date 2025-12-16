'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const comparisons = [
  {
    title: 'Stackyon vs Traditional Low-Code',
    competitor: 'Traditional Low-Code',
    bullets: [
      'No vendor-locked code generation',
      'AI agents embedded seamlessly',
      'Faster deployment cycles',
      'Handles highly custom logic without plugins',
    ],
  },
  {
    title: 'Stackyon vs Workflow Automation Tools',
    competitor: 'Workflow Automation Tools',
    bullets: [
      'Full UI builder included',
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

export default function DifferentiatorsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white/80"
            style={{ fontSize: '0.975rem' }}
          >
            Differentiators
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Why to Choose <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">Stackyon</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Compare Stackyon head-to-head with the platforms you know. Every card calls out what stays manual elsewhere and just ships inside Stackyon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <article
              key={comparison.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-b from-slate-900/85 via-slate-950/75 to-slate-950/90 p-8 shadow-[0_50px_150px_-70px_rgba(37,99,235,0.7)]"
            >
              <div className="pointer-events-none absolute inset-0" style={{
                background:
                  'linear-gradient(135deg, rgba(59,130,246,0.22) 0%, rgba(168,85,247,0.12) 45%, rgba(14,165,233,0) 100%)',
              }} />

              <div className="relative z-10 flex flex-col gap-6">
                <header className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-white">{comparison.title}</h3>
                </header>

                <ul className="flex flex-1 flex-col gap-4 text-base text-white/80">
                  {comparison.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 leading-relaxed">
                      <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-sky-300" aria-hidden="true" />
                      <span className="text-white/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
