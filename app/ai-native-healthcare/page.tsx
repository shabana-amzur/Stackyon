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
    iconClasses: "bg-blue-500/10 text-blue-300",
  },
  {
    id: "compliance-management",
    title: "Compliance & Regulatory Management",
    description: "Built-in HIPAA, HL7, and FHIR compliance with automated audit trails and regulatory reporting.",
    icon: ShieldCheckIcon,
    iconClasses: "bg-cyan-500/10 text-cyan-300",
  },
  {
    id: "patient-engagement",
    title: "Patient Engagement & Experience",
    description: "Personalized patient journeys with AI-driven recommendations and proactive care coordination.",
    icon: UserGroupIcon,
    iconClasses: "bg-purple-500/10 text-purple-300",
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
        {/* Dark blue gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#1a2942] to-[#0f1e35]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-[1360px] px-6 py-[100px] lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[50%_50%] lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Reveal animation="fade-up" duration={800} delay={50}>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm text-blue-300">
                  <HeartIcon className="h-4 w-4" />
                  <span>AI-native Healthcare Platform</span>
                </div>
              </Reveal>

              {/* Main Heading with highlighted text */}
              <Reveal animation="fade-up" duration={900} delay={100}>
                <h1 className="text-[52px] md:text-[56px] font-bold text-white leading-[1.1]">
                  AI-Native Healthcare Applications for{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
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
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Primary Button with Gradient */}
                  <Link
                    href="#solutions"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
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
              </Reveal>

              {/* Social Proof */}
              <Reveal animation="fade-up" duration={900} delay={400}>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#0a1929]"></div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-[#0a1929]"></div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#0a1929]"></div>
                  </div>
                  <p className="text-sm text-white/60">
                    Trusted by <span className="text-white font-semibold">healthcare leaders</span> worldwide
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Feature Cards */}
            <Reveal animation="fade-left" duration={1000} delay={400}>
              <div className="relative">
                {/* Main Card Container */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-white/10 p-8 backdrop-blur-xl">
                  <div className="space-y-4">
                    {/* Feature 1 - AI Agent Builder - Active */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20">
                            <CpuChipIcon className="h-7 w-7 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">AI Agent Builder</h3>
                            <p className="text-sm text-white/50">Drag & Drop Interface</p>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Feature 2 - Smart Automation - Active */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/20">
                            <ArrowPathIcon className="h-7 w-7 text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">Smart Automation</h3>
                            <p className="text-sm text-white/50">Intelligent Workflows</p>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Feature 3 - Analytics Dashboard - Inactive */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-700/20 to-slate-800/10 border border-white/10 p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-500/20">
                            <ChartBarIcon className="h-7 w-7 text-slate-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">Analytics Dashboard</h3>
                            <p className="text-sm text-white/50">Real-time insights</p>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 flex-shrink-0">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/10 blur-3xl"></div>
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
                <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[0.95] text-white tracking-tight">
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
                <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[0.95] text-white tracking-tight">
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
              <p className="text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
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
