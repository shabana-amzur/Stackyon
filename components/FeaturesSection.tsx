'use client';

import { ArrowRightIcon, ChartBarIcon, ShieldCheckIcon, GlobeAltIcon, CalendarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: ChartBarIcon,
    title: 'Build Complex Apps, Simply',
    description: 'Create enterprise workflows, decision logic, and UI screens, even for highly custom use cases without code.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'AI Agents Built Into Every Flow',
    description: 'Embed cognitive AI agents to interpret data, make decisions, and automate tasks end-to-end.',
  },
  {
    icon: GlobeAltIcon,
    title: 'End-to-End App Delivery',
    description: 'Model data, configure rules, design UI, build workflows, and deploy, all from one unified platform.',
  },
  {
    icon: CalendarIcon,
    title: 'Enterprise-Ready From Day One',
    description: 'Security, governance, multi-environment deployment, and scalability for real-world enterprise workloads.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(131, 103, 255, 0.45) 0%, rgba(131, 103, 255, 0.3) 40%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 leading-tight">
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
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors duration-300" />
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
