'use client';

type FeatureDefinition = {
  title: string;
  description: string;
  icon: (gradientId: string) => JSX.Element;
};

const features: FeatureDefinition[] = [
  {
    title: 'Build Complex Apps, Simply',
    description: 'Create enterprise workflows, decision logic, and UI screens, even for highly custom use cases without code.',
    icon: (gradientId) => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="10" y="12" width="44" height="16" rx="6" fill={`url(#${gradientId})`} fillOpacity={0.85} />
        <rect x="10" y="32" width="20" height="20" rx="6" stroke={`url(#${gradientId})`} strokeWidth="3" />
        <rect x="34" y="32" width="20" height="12" rx="6" stroke={`url(#${gradientId})`} strokeWidth="3" />
        <path d="M20 28h24" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI Agents Built Into Every Flow',
    description: 'Embed cognitive AI agents to interpret data, make decisions, and automate tasks end-to-end.',
    icon: (gradientId) => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="20" r="10" stroke={`url(#${gradientId})`} strokeWidth="3" />
        <circle cx="32" cy="20" r="4" fill={`url(#${gradientId})`} />
        <path d="M18 44c0-7.732 6.268-14 14-14s14 6.268 14 14v4c0 2.761-2.239 5-5 5H23c-2.761 0-5-2.239-5-5v-4z" stroke={`url(#${gradientId})`} strokeWidth="3" />
        <path d="M12 22l6 6M52 22l-6 6M32 8V4" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'End-to-End App Delivery',
    description: 'Model data, configure rules, design UI, build workflows, and deploy, all from one unified platform.',
    icon: (gradientId) => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M10 18h44v12H10z" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M16 30v20h12V30" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M36 30v14h12V30" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 44h16" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="24" r="2" fill={`url(#${gradientId})`} />
        <circle cx="32" cy="24" r="2" fill={`url(#${gradientId})`} />
        <circle cx="44" cy="24" r="2" fill={`url(#${gradientId})`} />
      </svg>
    ),
  },
  {
    title: 'Enterprise-Ready From Day One',
    description: 'Security, governance, multi-environment deployment, and scalability for real-world enterprise workloads.',
    icon: (gradientId) => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M20 22v-6l12-6 12 6v6" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M20 22h24v16c0 8.837-7.163 16-16 16s-16-7.163-16-16V22h8z" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M32 34v10" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="30" r="4" fill={`url(#${gradientId})`} />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(131, 103, 255, 0.45) 0%, rgba(131, 103, 255, 0.3) 40%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 leading-tight">
          Value Proposition
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6 h-12 w-12">
                  {feature.icon(`feature-gradient-${index}`)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
