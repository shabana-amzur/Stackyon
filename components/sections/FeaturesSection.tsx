'use client';

import Reveal from '@/components/ui/Reveal';
import type { ReactNode } from 'react';

/**
 * Defines the structure of a feature card
 * @property {string} title - Feature heading
 * @property {string} description - Feature description text
 * @property {Function} icon - Function that returns an SVG icon with gradient support
 */
type FeatureDefinition = {
  title: string;
  description: string;
  icon: (gradientId: string) => ReactNode;
};

/**
 * Array of platform features to display in the features section
 * Each feature includes a custom SVG icon with gradient effects
 */
const features: FeatureDefinition[] = [
  {
    title: 'Build Complex Apps, Simply',
    description:
      'Create enterprise workflows, decision logic, and UI screens, even for highly custom use cases without code.',
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
    description:
      'Embed cognitive AI agents to interpret data, make decisions, and automate tasks end-to-end.',
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
    description:
      'Model data, configure rules, design UI, build workflows, and deploy, all from one unified platform.',
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
    description:
      'Security, governance, multi-environment deployment, and scalability for real-world enterprise workloads.',
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

/**
 * FeaturesSection Component - Displays key platform features in a grid layout
 * 
 * Features:
 * - Responsive grid (1 column mobile, 2 tablet, 4 desktop)
 * - Staggered reveal animations for each card
 * - Interactive hover effects with gradients and shadows
 * - Custom SVG icons with gradient fills
 * - Card elevation on hover
 * 
 * Each feature card includes:
 * - Animated background grid pattern
 * - Gradient overlay on hover
 * - Icon with custom gradient
 * - Title and description
 */
export default function FeaturesSection() {
  return (
    <section className="relative bg-black pt-24 pb-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[80rem] px-4">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              animation="fade-down"
              duration={1200}
              delay={240 + index * 220}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-8 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-[#0066ff]/40 hover:shadow-[0_40px_90px_-45px_rgba(0,102,255,0.45)]">
                <div className="feature-card-grid" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0033cc]/0 to-[#0066ff]/0 transition-all duration-700 group-hover:from-[#0033cc]/10 group-hover:via-[#0066ff]/5 group-hover:to-[#0066ff]/10" />
                <span className="feature-card-line" />
                <div className="feature-card-overlay">
                  <div className="feature-card-beam" />
                  <div className="feature-card-beam secondary" />
                </div>

                <div className="relative z-10 flex flex-1 flex-col gap-5">
                  <div className="h-12 w-12">{feature.icon(`feature-gradient-${index}`)}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
