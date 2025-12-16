'use client';

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

export default function IndustriesSection() {
  const firstRow = industries.slice(0, 3);
  const secondRow = industries.slice(3);

  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4">
        <header className="flex flex-col items-center gap-6 text-center">
          <span
            className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 font-medium text-white/80"
            style={{ fontSize: '0.975rem' }}
          >
            Industries
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Where <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">Stackyon</span> Creates Maximum Impact
          </h2>
          <p className="max-w-2xl text-lg text-white/70">
            Accelerate industry programs with end-to-end automation, AI orchestration, and deployment-ready experiences.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {firstRow.map((item) => (
              <article
                key={item.title}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#07080d] p-10 shadow-[0_40px_140px_-60px_rgba(11,30,65,0.85)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_55%)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12)_0%,_transparent_65%)]" aria-hidden="true" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {secondRow.map((item) => (
              <article
                key={item.title}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#07080d] p-10 shadow-[0_40px_140px_-60px_rgba(11,30,65,0.85)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_55%)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12)_0%,_transparent_65%)]" aria-hidden="true" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
