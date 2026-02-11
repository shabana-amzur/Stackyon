'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  CommandLineIcon,
  ArrowPathIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Reveal from '@/components/ui/Reveal';

const features = [
  {
    id: "ai-agent-configuration",
    title: "AI agent configuration",
    description: "",
    icon: CpuChipIcon,
    iconClasses: "bg-purple-500/10 text-purple-300",
  },
  {
    id: "validation-workflows",
    title: "Validation within workflows",
    description: "",
    icon: ShieldCheckIcon,
    iconClasses: "bg-cyan-500/10 text-cyan-300",
  },
  {
    id: "recommendation-systems",
    title: "Recommendation systems",
    description: "",
    icon: Squares2X2Icon,
    iconClasses: "bg-blue-500/10 text-blue-300",
  },
  {
    id: "decision-automation",
    title: "Decision automation",
    description: "",
    icon: CommandLineIcon,
    iconClasses: "bg-teal-500/10 text-teal-300",
  },
];

export default function AgenticAIHubPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | string>("ai-agents");

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Banner with Two-Column Layout */}
      <section className="relative isolate overflow-hidden min-h-[350px] pt-[80px] pb-[80px]">
        {/* Dark blue gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#0d2847] to-[#0a1929]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-[1360px] px-6 py-[120px] lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Breadcrumb */}
              <Reveal animation="fade-up" duration={800} delay={50}>
                <nav className="flex items-center gap-2 text-sm text-white/60">
                  <Link href="/" className="hover:text-white/90 transition-colors">
                    Home
                  </Link>
                  <ChevronRightIcon className="h-4 w-4" />
                  <Link href="/platform" className="hover:text-white/90 transition-colors">
                    Platform
                  </Link>
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="text-white/90">Agentic AI Hub</span>
                </nav>
              </Reveal>

              {/* Main Heading */}
              <Reveal animation="fade-up" duration={900} delay={100}>
                <h1 className="text-[48px] font-medium text-white leading-tight">
                  Configure AI agents that operate inside workflows
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal animation="fade-up" duration={900} delay={200}>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                  A controlled environment for integrating AI agents directly into business processes, with governance, validation, and traceability built in from the start.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal animation="fade-up" duration={900} delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Primary Button with Gradient */}
                  <Link
                    href="#features"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#3e7ae5] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 shadow-lg hover:bg-[#5a8df0]"
                  >
                    See Agentic AI Hub in action
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium text-gray-900 transition hover:bg-gray-100"
                  >
                    Explore the platform
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Platform Screenshot */}
            <Reveal animation="fade-left" duration={1000} delay={400}>
              <div className="relative">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 animate-[slideInScale_1s_ease-out]">
                  <Image
                    src="/images/products/agentic-hub.jpg"
                    alt="Agentic AI Hub Interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Glow effect behind image */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12efeb]/30 via-[#3e7ae5]/30 to-[#523bdc]/30 blur-3xl scale-105 animate-[pulse_4s_ease-in-out_infinite]"></div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* What is Agentic AI Hub Section */}
      <section className="relative bg-[#030711] pt-8 pb-[63px] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/60 to-black"></div>
          <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={950} delay={100}>
            <div className="grid gap-24 lg:grid-cols-[30%_70%] text-white">
                {/* Left Column - Title */}
                <div>
                  <h2 className="text-4xl font-medium leading-tight md:text-[40px]">
                    AI agents that work within governed processes
                  </h2>
                </div>
                
                {/* Right Column - Text */}
                <div className="space-y-6">
                  <p className="text-lg text-white/70 leading-relaxed">
                    Most AI implementations operate outside core systems or replace workflows entirely. Agentic AI Hub integrates AI agents directly into business processes, where they can validate inputs, recommend next steps, or make decisions while maintaining full traceability and compliance.
                  </p>
                </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platform Features Section with Accordion */}
      <section className="relative pt-[63px] pb-12 overflow-visible bg-black">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <div className="grid gap-24 lg:grid-cols-[400px_1fr] items-start">
            {/* Left Column - Accordion */}
            <div className="space-y-4">
              {/* Main Title */}
              <div className="mb-8">
                <p className="text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                  Key features
                </p>
                <h2 className="text-4xl md:text-[40px] font-medium text-white">
                  What you can do with Agentic AI Hub
                </h2>
              </div>

              {/* Accordion Items */}
              <div className="space-y-2">
                {[
                  {
                    id: "ai-agents",
                    title: "Configure AI agents for specific tasks",
                    description: "Set up AI agents to handle validation, recommendations, or automated decisions within your workflows, without changing existing processes.",
                  },
                  {
                    id: "governance",
                    title: "Maintain governance and compliance",
                    description: "Track every AI decision, audit agent behavior, and enforce compliance standards across all automated interactions.",
                  },
                  {
                    id: "human-loop",
                    title: "Enable human-in-the-loop oversight",
                    description: "Configure when agents operate autonomously and when they escalate to human review, ensuring critical decisions remain controlled.",
                  },
                  {
                    id: "integration",
                    title: "Integrate with enterprise systems",
                    description: "Connect AI agents to existing data sources and systems, allowing them to operate with context and real-time information.",
                  }
                ].map((feature) => (
                  <div key={feature.id} className="border-b border-white/10">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === feature.id ? '' : feature.id)}
                      className={`flex w-full items-center justify-between py-4 text-left transition-colors ${
                        activeAccordion === feature.id ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span className="text-base font-medium tracking-wide">
                        {feature.title}
                      </span>
                      <ChevronRightIcon className={`h-5 w-5 text-white/60 transition-transform duration-300 ${
                        activeAccordion === feature.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {activeAccordion === feature.id && (
                      <div className="pb-4">
                        <p className="text-sm text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative -mr-6 lg:-mr-12">
              <button
                type="button"
                onClick={() => setLightbox({
                  src: "/images/products/agentic-hub.jpg",
                  alt: "Agentic AI Hub"
                })}
                className="group block w-full cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black transition-all duration-300 hover:border-white/30 hover:shadow-[0_40px_120px_-40px_rgba(56,189,248,0.6)]">
                  <Image
                    src="/images/products/agentic-hub.jpg"
                    alt="Agentic AI Hub"
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Banner Section */}
      <section className="relative py-10 overflow-hidden bg-black">

        <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="max-w-3xl mx-auto text-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                    Built for production AI
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Most AI tools operate outside business systems or lack governance for regulated environments. Agentic AI Hub integrates AI agents directly into workflows, with full auditability, compliance controls, and traceability built in from the start.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative bg-black py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                Where teams typically use Agentic AI Hub
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.slice(0, 4).map((feature, index) => (
              <Reveal 
                key={feature.id} 
                animation="fade-up" 
                duration={800} 
                delay={100 + index * 50}
              >
                <div className="group relative rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconClasses} mb-6`}>
                    <feature.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA Section for Agentic AI Hub */}
      <section className="relative isolate overflow-hidden bg-black py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gray-800" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-800" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
          <Reveal animation="fade-up" duration={950} delay={120}>
            <h2 className="text-4xl md:text-[40px] font-medium leading-tight text-white mb-4">
              See Agentic AI Hub in action
            </h2>
            <p className="text-xl text-white/70 max-w-2xl">
              See how teams integrate AI agents into workflows while maintaining compliance and control.
            </p>
          </Reveal>

          <Reveal animation="fade-up" duration={1000} delay={220}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/demo" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#12efeb] via-[#3e7ae5] to-[#523bdc] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
                <div className="relative flex items-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-[#12efeb] via-[#3e7ae5] to-[#523bdc] px-8 py-3.5 text-base font-medium text-white transition-all duration-500 bg-[length:200%_100%] bg-left hover:bg-right">
                  See Agentic AI Hub in Action
                  <LinkIcon className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/platform/dev-studio"
                className="rounded-lg bg-transparent border border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Explore Dev Studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 rounded-full bg-white p-2 text-gray-900 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
