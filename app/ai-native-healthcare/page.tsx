'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChevronRightIcon,
  LinkIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Reveal from '@/components/ui/Reveal';

const healthcareFeatures = [
  {
    id: "clinical-workflows",
    title: "Clinical Workflow Automation",
    description: "Streamline patient care processes with intelligent workflow orchestration that adapts to clinical protocols and patient needs.",
    icon: ClipboardDocumentListIcon,
    iconClasses: "bg-[#0033cc]/10 text-[#0066ff]",
  },
  {
    id: "compliance-management",
    title: "Compliance & Regulatory Management",
    description: "Built-in HIPAA, HL7, and FHIR compliance with automated audit trails and regulatory reporting.",
    icon: ShieldCheckIcon,
    iconClasses: "bg-[#0066ff]/10 text-[#0066ff]",
  },
  {
    id: "patient-engagement",
    title: "Patient Engagement & Experience",
    description: "Personalized patient journeys with AI-driven recommendations and proactive care coordination.",
    icon: UserGroupIcon,
    iconClasses: "bg-[#0033cc]/10 text-[#0033cc]",
  },
  {
    id: "clinical-decision-support",
    title: "Clinical Decision Support",
    description: "AI-powered insights for diagnosis, treatment planning, and clinical decision-making.",
    icon: DocumentCheckIcon,
    iconClasses: "bg-teal-500/10 text-teal-300",
  },
  {
    id: "population-health",
    title: "Population Health Management",
    description: "Analytics and predictive models for risk stratification, care gap identification, and outcome optimization.",
    icon: ChartBarIcon,
    iconClasses: "bg-indigo-500/10 text-indigo-300",
  },
  {
    id: "care-coordination",
    title: "Care Coordination",
    description: "Seamless collaboration across providers, departments, and care teams with intelligent routing and notifications.",
    icon: HeartIcon,
    iconClasses: "bg-rose-500/10 text-rose-300",
  },
];

const useCases = [
  {
    id: "ehr-integration",
    title: "EHR Modernization & Integration",
    description: "Connect legacy systems and modern EHRs with intelligent data exchange and workflow integration.",
  },
  {
    id: "telehealth",
    title: "Telehealth & Remote Care",
    description: "Enable virtual care delivery with integrated scheduling, documentation, and follow-up workflows.",
  },
  {
    id: "revenue-cycle",
    title: "Revenue Cycle Optimization",
    description: "Automate billing, claims processing, and prior authorization with AI-driven validation.",
  },
  {
    id: "quality-reporting",
    title: "Quality Reporting & Analytics",
    description: "Real-time quality metrics, regulatory reporting, and performance dashboards.",
  },
];

// Word component - tracks mouse distance for individual word
function Word({ 
  children, 
  mousePosition 
}: { 
  children: string; 
  mousePosition: { x: number; y: number };
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [colorMix, setColorMix] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    );
    
    // Maximum distance to consider (in pixels)
    const maxDistance = 200;
    const mix = Math.max(0, 1 - (distance / maxDistance));
    
    setColorMix(mix);
  }, [mousePosition]);

  // Interpolate between #7f9385 and #ffffff
  const baseColor = { r: 127, g: 147, b: 133 }; // #7f9385
  const whiteColor = { r: 255, g: 255, b: 255 }; // #ffffff
  
  const r = Math.round(baseColor.r + (whiteColor.r - baseColor.r) * colorMix);
  const g = Math.round(baseColor.g + (whiteColor.g - baseColor.g) * colorMix);
  const b = Math.round(baseColor.b + (whiteColor.b - baseColor.b) * colorMix);
  
  return (
    <span
      ref={ref}
      style={{
        color: `rgb(${r}, ${g}, ${b})`,
        transition: 'color 0.2s ease-out'
      }}
    >
      {children}
    </span>
  );
}

// MouseTrackText Component - Changes color from #7f9385 to white word by word
function MouseTrackText({ 
  children, 
  mousePosition, 
  className = '', 
  baseOpacity = 0.4, 
  maxOpacity = 1,
  as = 'p'
}: { 
  children: React.ReactNode; 
  mousePosition: { x: number; y: number }; 
  className?: string;
  baseOpacity?: number;
  maxOpacity?: number;
  as?: 'p' | 'span';
}) {
  const Component = as;
  
  // Split text into words and wrap each in Word component
  const renderWords = (text: string) => {
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      if (word.match(/\s+/)) {
        return word; // Return whitespace as is
      }
      return (
        <Word key={index} mousePosition={mousePosition}>
          {word}
        </Word>
      );
    });
  };
  
  return (
    <Component className={className}>
      {typeof children === 'string' ? renderWords(children) : children}
    </Component>
  );
}

export default function AIHealthcarePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateBrightness = (element: HTMLElement | null) => {
    if (!element) return 0.4;
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    );
    
    // Maximum distance to consider (in pixels)
    const maxDistance = 300;
    const brightness = Math.max(0.4, 1 - (distance / maxDistance));
    
    return brightness;
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden min-h-[600px] pt-[80px] pb-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg_image.jpg"
            alt="Healthcare background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-[1360px] px-6 py-[100px] lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[50%_50%] lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Main Heading with highlighted text */}
              <Reveal animation="fade-up" duration={900} delay={100}>
                <h1 className="text-[52px] md:text-[56px] font-medium text-white leading-[1.1]">
                  AI-Native Healthcare Applications for{' '}
                  <span className="bg-gradient-to-r from-[#0033cc] via-[#0066ff] to-[#0066ff] bg-clip-text text-transparent">
                    Clinical and Operational Workflows
                  </span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal animation="fade-up" duration={900} delay={200}>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                  Stackyon enables healthcare organizations to structure, automate, and evolve clinical and administrative workflows using multimodal AI agents that operate directly within existing systems.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal animation="fade-up" duration={900} delay={300}>
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Primary Button with Gradient */}
                    <Link
                      href="#solutions"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0033cc] to-[#0066ff] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-[#0066ff]/50 hover:scale-105"
                    >
                      Explore Healthcare Workflows
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>

                    {/* Secondary Button */}
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 rounded-lg bg-transparent border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      See AI in Action
                    </Link>
                  </div>
                  
                  {/* Description Text */}
                  <p className="italic text-[14px] text-gray-400 max-w-2xl leading-relaxed">
                    Used to support care coordination, documentation, billing, and workflow automation across healthcare environments where accuracy, compliance, and operational control are critical.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Stats Grid */}
            <Reveal animation="fade-left" duration={1000} delay={400}>
              <div className="grid grid-cols-2 gap-6">
                {/* Row 1: 97% Clean Claim Rate with Dashboard */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-8 backdrop-blur-xl animate-float" style={{ animationDelay: '0s' }}>
                  <div className="mb-6">
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/10 border border-[#0066ff]/20 p-4 overflow-hidden">
                      <div className="w-full h-full rounded bg-gradient-to-r from-[#0033cc]/20 to-[#0066ff]/20 flex items-center justify-center relative">
                        <ChartBarIcon className="h-16 w-16 text-[#0066ff]/40 absolute" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-1 w-3/4 h-3/4">
                            <div className="bg-[#0066ff]/30 rounded"></div>
                            <div className="bg-red-400/30 rounded"></div>
                            <div className="bg-[#0033cc]/30 rounded"></div>
                            <div className="bg-[#0066ff]/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-6xl font-bold text-[#0066ff] mb-2">97%</div>
                      <div className="text-lg text-white/60">Clean Claim Rate</div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066ff]/20">
                      <svg className="h-6 w-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 1: 60% Time Saved */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-8 backdrop-blur-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066ff]/20 mb-6">
                    <svg className="h-10 w-10 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">60%</div>
                  <div className="text-lg text-white/60 mb-1">Time Saved</div>
                  <div className="text-sm text-white/40">On administrative tasks</div>
                </div>

                {/* Row 2: AI Agents */}
                <div className="relative rounded-3xl bg-gradient-to-br from-[#0033cc]/20 to-slate-900/80 border border-[#0066ff]/20 p-8 backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066ff]/20 mb-6">
                    <CpuChipIcon className="h-10 w-10 text-[#0066ff]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">AI Agents</div>
                  <div className="text-sm text-white/60">Multimodal intelligence across workflows</div>
                </div>

                {/* Row 2: Workflow Automation */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-6 backdrop-blur-xl overflow-hidden animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="relative z-10 mb-4">
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/20 border border-[#0066ff]/20 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0033cc]/10 to-[#0066ff]/10">
                        <div className="absolute right-4 bottom-0 w-20 h-24 bg-gradient-to-t from-[#0066ff]/30 to-transparent rounded-t-full"></div>
                        <div className="absolute left-4 top-4 grid grid-cols-2 gap-1 w-16 h-16">
                          <div className="bg-[#0066ff]/20 rounded"></div>
                          <div className="bg-[#0033cc]/20 rounded"></div>
                          <div className="bg-[#0066ff]/20 rounded"></div>
                          <div className="bg-[#0033cc]/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="text-xl font-bold text-white">Workflow Automation</div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066ff]/20 flex-shrink-0">
                      <svg className="h-5 w-5 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Why Healthcare Needs AI Section */}
      <section ref={sectionRef} className="relative overflow-hidden border-t border-white/10">
        {/* Deep green background with gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B2E] via-[#0a2f24] to-[#0D3B2E]"></div>
          {/* Subtle grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 lg:px-20">
          <div className="grid gap-20 lg:grid-cols-2 items-center min-h-[80vh] py-[120px]">
            {/* Left Column - Large Headline */}
            <Reveal animation="fade-up" duration={1000} delay={100}>
              <div className="lg:sticky lg:top-32">
                <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-medium leading-[0.95] text-white tracking-tight">
                  The Operational Problem
                </h2>
              </div>
            </Reveal>
            
            {/* Right Column - Body Text with luxury styling */}
            <div className="space-y-8">
              <Reveal animation="fade-up" duration={800} delay={150}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[20px] leading-[1.7] font-normal"
                  baseOpacity={0.4}
                >
                  Healthcare providers spend disproportionate time on administrative and documentation tasks, creating burnout, delays, and financial leakage.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={250}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.9}
                >
                  Fragmented systems, manual handoffs, and disconnected tools make workflows slow, error-prone, and difficult to evolve. This results in denied claims, compliance risk, care coordination gaps, and rising operational costs.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={350}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.85}
                >
                  For healthcare organizations, this is the moment to lean deeper into operational excellence. To pair clinical expertise with systems designed to amplify efficiency and reduce administrative burden.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={450}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.9}
                >
                  Stackyon addresses this by structuring workflows, decisions, and intelligence within a unified operational layer—rather than adding another external tool that creates more fragmentation.
                </MouseTrackText>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Intelligence Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Deep green background with gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B2E] via-[#0a2f24] to-[#0D3B2E]"></div>
          {/* Subtle grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 lg:px-20">
          <div className="grid gap-20 lg:grid-cols-2 items-center min-h-[80vh] py-[120px]">
            {/* Left Column - Large Headline */}
            <Reveal animation="fade-up" duration={1000} delay={100}>
              <div className="lg:sticky lg:top-32">
                <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-medium leading-[0.95] text-white tracking-tight">
                  Clinical workflows need intelligence, not just automation.
                </h2>
              </div>
            </Reveal>
            
            {/* Right Column - Body Text with luxury styling */}
            <div className="space-y-8">
              <Reveal animation="fade-up" duration={800} delay={150}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[20px] leading-[1.7] font-normal"
                  baseOpacity={0.4}
                >
                  AI is reshaping how healthcare organizations coordinate care, manage documentation, and deliver patient outcomes.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={200}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.9}
                >
                  Clinical workflows are evolving, and accuracy, context, and compliance matter more than ever in determining which systems drive real value without adding friction.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={250}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.85}
                >
                  For healthcare leaders, this is the moment to build operational systems that support clinical excellence. To combine medical expertise with intelligent automation designed to reduce burden and improve care delivery.
                </MouseTrackText>
              </Reveal>
              
              <Reveal animation="fade-up" duration={800} delay={300}>
                <MouseTrackText 
                  mousePosition={mousePosition}
                  className="text-[18px] leading-[1.8] font-normal"
                  baseOpacity={0.4}
                  maxOpacity={0.9}
                >
                  Stackyon is where clinical workflows become intelligent operations, and where healthcare organizations build the foundation for sustainable, scalable care delivery.
                </MouseTrackText>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions Grid */}
      <section id="solutions" className="relative bg-black py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <p className="text-lg bg-gradient-to-r from-[#0033cc] via-[#0066ff] to-[#0066ff] bg-clip-text text-transparent mb-3">
                Comprehensive Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                AI-powered healthcare capabilities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {healthcareFeatures.map((feature, index) => (
              <Reveal 
                key={feature.id} 
                animation="fade-up" 
                duration={800} 
                delay={100 + index * 50}
              >
                <div className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconClasses} mb-6`}>
                    <feature.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative bg-[#030711] py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-black"></div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                Healthcare use cases
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <Reveal 
                key={useCase.id} 
                animation="fade-up" 
                duration={800} 
                delay={100 + index * 50}
              >
                <div className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Reveal>
            ))}
          </div>
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
