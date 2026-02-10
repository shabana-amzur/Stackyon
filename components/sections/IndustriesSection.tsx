'use client';

import Reveal from '@/components/ui/Reveal';

/**
 * Array of industries served by the platform
 * Each industry includes a custom SVG icon with gradient,
 * title, and description of use cases
 */
const industries = [
  {
    title: 'Healthcare',
    description: 'EHR systems, PBM platforms, insurance workflows, patient care, compliance automation, and AI-driven triage.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <defs>
          <linearGradient id="industry-healthcare-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M28 8h8v16h16v8H36v16h-8V32H12v-8h16V8z" fill="url(#industry-healthcare-gradient)" />
        <circle cx="48" cy="16" r="6" stroke="url(#industry-healthcare-gradient)" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Industrial Parks',
    description: 'IoT dashboards, predictive analytics, environmental monitoring, surveillance alerts, and operations management.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <defs>
          <linearGradient id="industry-industrial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="8" y="28" width="16" height="20" rx="3" stroke="url(#industry-industrial-gradient)" strokeWidth="3" />
        <rect x="26" y="20" width="14" height="28" rx="3" stroke="url(#industry-industrial-gradient)" strokeWidth="3" />
        <rect x="44" y="12" width="12" height="36" rx="3" stroke="url(#industry-industrial-gradient)" strokeWidth="3" />
        <path d="M6 50h52" stroke="url(#industry-industrial-gradient)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="8" r="4" fill="url(#industry-industrial-gradient)" />
      </svg>
    ),
  },
  {
    title: 'Banking & Finance',
    description: 'Risk scoring, fraud detection workflows, core process automation, and regulatory logic.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <defs>
          <linearGradient id="industry-banking-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M12 20h40l-20-12-20 12z" stroke="url(#industry-banking-gradient)" strokeWidth="3" strokeLinejoin="round" fill="none" />
        <rect x="16" y="24" width="32" height="24" rx="4" stroke="url(#industry-banking-gradient)" strokeWidth="3" />
        <path d="M20 36h24" stroke="url(#industry-banking-gradient)" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 30h12" stroke="url(#industry-banking-gradient)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="42" r="4" fill="url(#industry-banking-gradient)" />
      </svg>
    ),
  },
  {
    title: 'Retail',
    description: 'Inventory, POS logic, demand forecasting, customer analytics.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <defs>
          <linearGradient id="industry-retail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M10 20h44l-4 28H14l-4-28z" stroke="url(#industry-retail-gradient)" strokeWidth="3" strokeLinejoin="round" fill="none" />
        <path d="M24 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="url(#industry-retail-gradient)" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 32h28" stroke="url(#industry-retail-gradient)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="46" r="3" fill="url(#industry-retail-gradient)" />
        <circle cx="40" cy="46" r="3" fill="url(#industry-retail-gradient)" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    description: 'ERP extensions, plant automation, supply chain visibility, digital operations.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <defs>
          <linearGradient id="industry-manufacturing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M14 44V24l12 6V24l12 6V18l12 8v18" stroke="url(#industry-manufacturing-gradient)" strokeWidth="3" strokeLinejoin="round" fill="none" />
        <rect x="10" y="44" width="44" height="8" rx="2" fill="url(#industry-manufacturing-gradient)" fillOpacity={0.8} />
        <circle cx="20" cy="18" r="4" fill="url(#industry-manufacturing-gradient)" />
        <circle cx="32" cy="12" r="3" fill="url(#industry-manufacturing-gradient)" />
        <circle cx="44" cy="20" r="4" fill="url(#industry-manufacturing-gradient)" />
      </svg>
    ),
  },
];

/**
 * IndustriesSection Component - Displays target industries and use cases
 * 
 * Shows a grid of industry cards, each highlighting:
 * - Industry name
 * - Custom gradient SVG icon
 * - Specific use cases and applications
 * 
 * Features:
 * - Responsive grid (1, 2, or 3 columns based on screen size)
 * - Custom gradient icons for each industry
 * - Staggered reveal animations
 * - Card hover effects (border color, shadow, elevation)
 * - Consistent gradient theme throughout
 * 
 * Industries covered:
 * - Healthcare: EHR, PBM, insurance workflows
 * - Industrial Parks: IoT, monitoring, operations
 * - Banking & Finance: Risk scoring, fraud detection
 * - Retail: Inventory, POS, customer analytics
 * - Manufacturing: ERP, automation, supply chain
 * - Logistics: Route optimization, fleet tracking
 * - Government: Citizen services, compliance
 * - Insurance: Claims, underwriting
 */
export default function IndustriesSection() {
  const firstRow = industries.slice(0, 3);
  const secondRow = industries.slice(3);

  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-[40px] font-medium text-white reveal-child" style={{ transitionDelay: '140ms' }}>
            Where Stackyon Creates Maximum Impact
          </h2>
          <p className="max-w-2xl text-lg text-white/70 reveal-child" style={{ transitionDelay: '200ms' }}>
            Accelerate industry programs with end-to-end automation, AI orchestration, and deployment-ready experiences.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {firstRow.map((item, index) => (
              <Reveal
                key={item.title}
                animation="fade-up"
                duration={1050}
                delay={220 + index * 130}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-10 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-sky-500/5 group-hover:to-purple-500/10" />

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {secondRow.map((item, index) => (
              <Reveal
                key={item.title}
                animation="fade-up"
                duration={1050}
                delay={220 + (firstRow.length + index) * 130}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-10 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-sky-500/5 group-hover:to-purple-500/10" />

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
