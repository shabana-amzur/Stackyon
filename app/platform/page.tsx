'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  CpuChipIcon,
  LinkIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Reveal from '@/components/ui/Reveal';

const platformFeatures = [
  {
    id: "dev-studio",
    title: "Dev Studio",
    subtitle: "Meet the stackyon platform",
    description: "A visual, model-driven workspace where applications are designed and evolved—covering workflows, rules, data models, and user journeys.",
    image: "/images/products/dev-studio.jpg",
  },
  {
    id: "agentic-ai-hub",
    title: "Agentic AI Hub",
    subtitle: "Meet the stackyon platform",
    description: "A controlled environment for configuring AI agents that operate inside workflows, supporting validation, recommendations, and decision-making.",
    image: "/images/products/agentic-hub.jpg",
  },
];

const capabilityCards = [
  {
    id: "application-experience",
    title: "Application & Experience",
    description:
      "Visual workflows, business rules, decision tables, UI design, user journeys, and evolving data models.",
    icon: Squares2X2Icon,
    iconClasses: "bg-sky-500/10 text-sky-300",
  },
  {
    id: "decision-intelligence",
    title: "Decision & Intelligence",
    description:
      "Agentic AI operating alongside rules and process logic for validation, recommendations, and decisions.",
    icon: CpuChipIcon,
    iconClasses: "bg-purple-500/10 text-purple-300",
  },
  {
    id: "process-orchestration",
    title: "Process Orchestration",
    description:
      "Support for conditional, parallel, and long-running execution reflecting real enterprise operations.",
    icon: ArrowPathIcon,
    iconClasses: "bg-blue-500/10 text-blue-300",
  },
  {
    id: "integration-connectivity",
    title: "Integration & Connectivity",
    description:
      "APIs and system integrations without disrupting existing enterprise environments.",
    icon: LinkIcon,
    iconClasses: "bg-cyan-500/10 text-cyan-300",
  },
  {
    id: "operations-governance",
    title: "Operations & Governance",
    description:
      "Deployment, environment management, security, access control, auditability, and versioning.",
    icon: ShieldCheckIcon,
    iconClasses: "bg-indigo-500/10 text-indigo-300",
  },
  {
    id: "monitoring-insights",
    title: "Monitoring & Insights",
    description:
      "Reporting, analytics, and observability across live applications.",
    icon: ChartBarSquareIcon,
    iconClasses: "bg-teal-500/10 text-teal-300",
  },
];

type ParticleConfig = {
  opacity: number;
  size: number;
  duration: number;
  x: number;
  y: number;
  delay: number;
};

const PARTICLE_COUNT = 10;

const createParticles = (): ParticleConfig[] =>
  Array.from({ length: PARTICLE_COUNT }, () => ({
    opacity: Math.random() * 0.6 + 0.2,
    size: Math.random() * 2.5 + 1,
    duration: (Math.random() * 20 + 15) * 0.9,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

export default function PlatformPage() {
  const [activeFeature, setActiveFeature] = useState("dev-studio");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [particles] = useState<ParticleConfig[]>(() => createParticles());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;
      
      const particles = particlesRef.current.querySelectorAll('.particle');
      const rect = particlesRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach((particle) => {
        const el = particle as HTMLElement;
        const particleRect = el.getBoundingClientRect();
        const particleX = particleRect.left - rect.left + particleRect.width / 2;
        const particleY = particleRect.top - rect.top + particleRect.height / 2;

        const deltaX = mouseX - particleX;
        const deltaY = mouseY - particleY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          const moveX = -(deltaX / distance) * force * 50;
          const moveY = -(deltaY / distance) * force * 50;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Banner with Two-Column Layout */}
      <section className="relative isolate overflow-hidden min-h-[350px] pt-[80px] pb-[80px]">
        {/* Dark blue gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#0d2847] to-[#0a1929]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          
          {/* Mesh grid pattern overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
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
                  <span className="text-white/90">Platform</span>
                </nav>
              </Reveal>

              {/* Main Heading */}
              <Reveal animation="fade-up" duration={900} delay={100}>
                <h1 className="text-[48px] font-normal text-white leading-tight">
                  An AI-native platform for intelligent enterprise applications
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal animation="fade-up" duration={900} delay={200}>
                <p className="text-white/80 leading-relaxed max-w-xl" style={{ fontSize: '19px', fontWeight: 300 }}>
                  Design processes, embed intelligence, and run business-critical applications on one unified platform. Built for complexity, change, and control.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal animation="fade-up" duration={900} delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Primary Button with Gradient */}
                  <Link
                    href="/platform/dev-studio"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#3e7ae5] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 shadow-lg hover:bg-[#5a8df0]"
                  >
                    Explore Dev Studio
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    href="/platform/agentic-ai"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium text-gray-900 transition hover:bg-gray-100"
                  >
                    Explore Agentic AI hub
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Platform Screenshot */}
            <Reveal animation="fade-left" duration={1000} delay={400}>
              <div className="relative">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/platform banner.png"
                    alt="Administration Console Interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Glow effect behind image */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12efeb]/30 via-[#3e7ae5]/30 to-[#523bdc]/30 blur-3xl scale-105"></div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Enterprise Focus Section */}
      <section className="relative bg-[#030711] py-[80px] overflow-hidden">
        {/* Particles Background */}
        <div ref={particlesRef} className="stars-container absolute inset-0 z-0">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="particle absolute bg-white rounded-full transition-transform duration-300 ease-out"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/60 to-black"></div>
          <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-purple-500/15 blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 lg:px-12 relative z-10">
          <Reveal animation="fade-up" duration={950} delay={100}>
            <div className="text-white grid gap-12 lg:grid-cols-[40%_60%] items-start">
                {/* Left Column - Title */}
                <div>
                  <h2 className="leading-tight" style={{ fontSize: '45px', fontWeight: 400 }}>
                    Built for enterprise systems that don't stand still
                  </h2>
                </div>
                
                {/* Right Column - Text */}
                <div className="space-y-6">
                  <p className="text-white/70 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                  Enterprise applications are shaped by years of business rules, integrations, regulatory constraints, and operational dependencies. Requirements change frequently, but traditional development and stitched tools make every change slow and risky.
                </p>
                  <p className="text-white/70 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Most platforms automate tasks or add AI as a separate layer. Stackyon was built to treat workflows, decisions, and intelligence as core parts of the system so applications can evolve without losing structure, transparency, or control.
                  </p>
                </div>
              </div>
            </Reveal>
        </div>
      </section>

      {/* Platform Features Section with Accordion */}
      <section className="relative py-[80px] overflow-visible bg-black">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[400px_1fr] items-start">
            {/* Left Column - Accordion */}
            <div className="space-y-4">
              {/* Main Title */}
              <div className="mb-8">
                <p className="text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                  {platformFeatures.find(f => f.id === activeFeature)?.subtitle || ""}
                </p>
                <h2 className="text-4xl md:text-[40px] font-normal text-white">
                  The Stackyon Work Environment
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                  The Stackyon platform is accessed and used through two tightly integrated components.
                </p>
              </div>

              {/* Accordion Items */}
              <div className="space-y-2">
                {platformFeatures.map((feature) => (
                  <Disclosure key={feature.id} as="div" defaultOpen={feature.id === activeFeature}>
                    {({ open }) => (
                      <div className="border-b border-white/10">
                        <Disclosure.Button
                          onClick={() => setActiveFeature(feature.id)}
                          className={`flex w-full items-center justify-between py-4 text-left transition-colors ${
                            activeFeature === feature.id ? 'text-white' : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <span className="text-base font-medium tracking-wide">
                            {feature.title}
                          </span>
                          {activeFeature === feature.id ? (
                            <ChevronUpIcon className="h-5 w-5 text-white/60" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-white/60" />
                          )}
                        </Disclosure.Button>
                        {activeFeature === feature.id && (
                          <Transition
                            appear
                            show={true}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel static className="pb-4 space-y-3">
                              <p className="text-white/70 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                                {feature.description}
                              </p>
                              <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                              >
                                Learn more
                                <ArrowRightIcon className="h-4 w-4 text-blue-500" />
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        )}
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative -mr-6 lg:-mr-12">
              <button
                type="button"
                onClick={() => setLightbox({
                  src: platformFeatures.find(f => f.id === activeFeature)?.image || "/images/dev-studio-screen.png",
                  alt: platformFeatures.find(f => f.id === activeFeature)?.title || "Platform Feature"
                })}
                className="group block w-full cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black transition-all duration-300 hover:border-white/30 hover:shadow-[0_40px_120px_-40px_rgba(56,189,248,0.6)]">
                  <Image
                    src={platformFeatures.find(f => f.id === activeFeature)?.image || "/images/dev-studio-screen.png"}
                    alt={platformFeatures.find(f => f.id === activeFeature)?.title || "Platform Feature"}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={() => setLightbox(null)}
            role="presentation"
          >
            <div
              className="relative max-w-6xl w-full rounded-2xl border border-white/20 bg-black/80 p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-full w-full" style={{ minHeight: '500px' }}>
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/20 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* How the Platform Works Section */}
      {/* How the Platform Works Section */}
      <section className="relative bg-black pt-[80px] pb-[80px]">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-8">
          {/* Heading */}
          <Reveal animation="fade-up" duration={950} delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-[40px] font-normal text-white">
                How the Platform Works end to end
              </h2>
            </div>
          </Reveal>

          {/* Steps Container */}
          <Reveal animation="fade-up" duration={900} delay={200}>
            <div className="relative">
              {/* Connecting Line - Aligned through center of boxes */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 via-purple-400/40 via-blue-400/40 via-purple-400/40 to-transparent hidden lg:block"></div>
              
              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                {/* Step 1 - Model */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Main box */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-sky-500 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                      <CircleStackIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4">Step 1</h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Model Define how your business behaves using Dev Studio.
                  </p>
                </div>

                {/* Step 2 - Add Intelligence */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Main box */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-pink-500 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                      <CpuChipIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4">Step 2</h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Add Intelligence Embed AI Agents where judgment and automation matter.
                  </p>
                </div>

                {/* Step 3 - Connect */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Main box */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-500 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                      <LinkIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4">Step 3</h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Connect Integrate with existing apps, APIs, and data sources without disruption.
                  </p>
                </div>

                {/* Step 4 - Run */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Main box */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-violet-400 to-violet-500 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                      <RocketLaunchIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4">Step 4</h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Run Deploy apps across environments instantly.
                  </p>
                </div>

                {/* Step 5 - Adapt */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Main box */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-indigo-500 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                      <ArrowPathIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4">Step 5</h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: '19px', fontWeight: 300 }}>
                    Adapt Modify workflows, logic, rules, and UI as requirements evolve, without rewrites.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="relative isolate overflow-hidden bg-black pt-[80px] pb-[120px]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-blue-950/40" />

        <div className="relative mx-auto w-full max-w-[1360px] px-6 lg:px-10">
          <Reveal animation="fade-up" duration={950} delay={120}>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-4xl font-normal text-white md:text-5xl mb-6">
                Platform capabilities
              </h2>
              <p className="leading-relaxed text-white/70" style={{ fontSize: '19px', fontWeight: 300 }}>
                Stackyon provides the full set of capabilities required to build, modernize, and operate intelligent enterprise applications.
              </p>
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={900} delay={180}>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
              {/* Vertical dividers */}
              <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-white/10"></div>
              <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-white/10"></div>
              
              {/* Horizontal divider */}
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-white/10"></div>
              
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.id}
                    className="relative flex flex-col gap-4 p-8"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-normal text-white">{card.title}</h3>
                    <p className="leading-relaxed text-white/60" style={{ fontSize: '19px', fontWeight: 300 }}>{card.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Additional content sections can go here */}
    </div>
  );
}
