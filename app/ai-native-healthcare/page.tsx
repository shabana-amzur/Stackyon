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

type ParticleConfig = {
  opacity: number;
  size: number;
  duration: number;
  x: number;
  y: number;
  delay: number;
};

const PARTICLE_COUNT = 50;

const createParticles = (): ParticleConfig[] =>
  Array.from({ length: PARTICLE_COUNT }, () => ({
    opacity: 1,
    size: Math.random() * 2.5 + 1,
    duration: (Math.random() * 10 + 8) * 0.9,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

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
  as = 'p',
  style
}: { 
  children: React.ReactNode; 
  mousePosition: { x: number; y: number }; 
  className?: string;
  baseOpacity?: number;
  maxOpacity?: number;
  as?: 'p' | 'span';
  style?: React.CSSProperties;
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
    <Component className={className} style={style}>
      {typeof children === 'string' ? renderWords(children) : children}
    </Component>
  );
}

export default function AIHealthcarePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeAccordion, setActiveAccordion] = useState<string>('scheduling-coordination');
  const [activeTab, setActiveTab] = useState<string>('administrative');
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ParticleConfig[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    setParticles(createParticles());
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

        const deltaX = particleX - mouseX;
        const deltaY = particleY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const moveX = deltaX * force * 0.5;
          const moveY = deltaY * force * 0.5;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
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
        <style jsx>{`
          @keyframes floatUp {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes floatDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(20px); }
          }
        `}</style>
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
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
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
                <div 
                  className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-8 backdrop-blur-xl"
                  style={{
                    animation: 'floatUp 4s ease-in-out infinite',
                  }}
                >
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
                <div 
                  className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-8 backdrop-blur-xl"
                  style={{
                    animation: 'floatDown 4.5s ease-in-out infinite',
                  }}
                >
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
                <div 
                  className="relative rounded-3xl bg-gradient-to-br from-[#0033cc]/20 to-slate-900/80 border border-[#0066ff]/20 p-8 backdrop-blur-xl"
                  style={{
                    animation: 'floatUp 4.2s ease-in-out infinite',
                    animationDelay: '0.5s',
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066ff]/20 mb-6">
                    <CpuChipIcon className="h-10 w-10 text-[#0066ff]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">AI Agents</div>
                  <div className="text-sm text-white/60">Multimodal intelligence across workflows</div>
                </div>

                {/* Row 2: Workflow Automation */}
                <div 
                  className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-white/10 p-6 backdrop-blur-xl overflow-hidden"
                  style={{
                    animation: 'floatDown 4.8s ease-in-out infinite',
                    animationDelay: '0.3s',
                  }}
                >
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

      {/* AI that works within your business rules Section */}
      <section className="relative pt-[20px] pb-[80px] overflow-hidden" suppressHydrationWarning>
        <style jsx global>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 10px) scale(1.05); }
          }
          @keyframes blob-reverse {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-20px, 20px) scale(1.1); }
            50% { transform: translate(20px, -20px) scale(0.9); }
            75% { transform: translate(-20px, -10px) scale(1.05); }
          }
          @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            25% { transform: translateY(-25px); opacity: 1; }
            50% { transform: translateY(-50px); opacity: 1; }
            75% { transform: translateY(-75px); opacity: 1; }
            100% { transform: translateY(-100px); opacity: 1; }
          }
        `}</style>
        <div className="absolute inset-0 -z-10">
          {/* Dynamic blue gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black"></div>
          
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-transparent"></div>
          <div 
            className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
            style={{
              animation: 'blob 20s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
            style={{
              animation: 'blob-reverse 18s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
            style={{
              animation: 'blob 25s ease-in-out infinite reverse'
            }}
          ></div>
        </div>
        
        {/* Floating particles - Home page style */}
        {isMounted && (
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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
        )}

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <Reveal animation="fade-up" duration={950} delay={100}>
            <div className="text-white text-center max-w-[1360px] mx-auto">
                {/* Title */}
                <h2 className="text-[25px] font-medium leading-tight mb-8">
                  The Operational Problem
                </h2>
                
                {/* Text */}
                <div className="space-y-6">
                  <MouseTrackText 
                    mousePosition={mousePosition}
                    className="text-center"
                    baseOpacity={0.4}
                    maxOpacity={1}
                    as="p"
                    style={{ fontSize: '32px', fontWeight: 100, fontFamily: 'Google Sans, sans-serif', lineHeight: 1.3 }}
                  >
                    Healthcare providers spend disproportionate time on administrative and documentation tasks, creating burnout, delays, and financial leakage. Fragmented systems, manual handoffs, and disconnected tools make workflows slow, error-prone, and difficult to evolve. This results in denied claims, compliance risk, care coordination gaps, and rising operational costs. Stackyon addresses this by structuring workflows, decisions, and intelligence within a unified operational layer rather than adding another external tool.
                  </MouseTrackText>
                </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How Stackyon Applies to Healthcare Section */}
      <section className="relative bg-black py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-[48px] font-medium text-white mb-12">How Stackyon Applies to Healthcare</h2>
              <div className="flex justify-center">
                <div className="relative w-full max-w-5xl">
                  <Image
                    src="/Stackyon-Impact.png"
                    alt="How Stackyon Applies to Healthcare"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Healthcare Workflows Section */}
      <section className="relative bg-black py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          {/* Tabs at the top */}
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-[48px] font-medium text-white mb-6">Healthcare Workflows</h2>
              <p className="text-lg text-white/70 max-w-5xl mx-auto mb-8">
                Our AI-powered platform adapts to your existing processes while introducing smart automation that reduces burden and improves patient outcomes.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => {
                    setActiveTab('administrative');
                    setActiveAccordion('scheduling-coordination');
                  }}
                  className={`px-8 py-3 rounded-lg border transition-all duration-300 ${
                    activeTab === 'administrative'
                      ? 'bg-[#0066ff] border-[#0066ff] text-white'
                      : 'bg-transparent border-white/20 text-white/70 hover:border-white/40'
                  }`}
                >
                  Administrative Workflows
                </button>
                <button
                  onClick={() => {
                    setActiveTab('clinical');
                    setActiveAccordion('patient-intake');
                  }}
                  className={`px-8 py-3 rounded-lg border transition-all duration-300 ${
                    activeTab === 'clinical'
                      ? 'bg-[#0066ff] border-[#0066ff] text-white'
                      : 'bg-transparent border-white/20 text-white/70 hover:border-white/40'
                  }`}
                >
                  Clinical Workflows
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[70%_30%] gap-12 items-start">
            {/* Left Side - Image that changes based on tab and accordion */}
            <Reveal animation="fade-right" duration={900} delay={200}>
              <div className="relative w-full">
                <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-white/10 overflow-hidden">
                  {/* Administrative Workflows Images */}
                  {activeTab === 'administrative' && (
                    <>
                      {activeAccordion === 'scheduling-coordination' && (
                        <Image
                          src="/images/workflows/workflow_1.jpg"
                          alt="Scheduling & Resource Coordination"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                      {activeAccordion === 'revenue-cycle' && (
                        <Image
                          src="/images/workflows/workflow_2.jpg"
                          alt="Revenue Cycle Management"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                      {activeAccordion === 'transition-care' && (
                        <Image
                          src="/images/workflows/workflow_3.jpg"
                          alt="Transition of Care Management"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                    </>
                  )}
                  
                  {/* Clinical Workflows Images */}
                  {activeTab === 'clinical' && (
                    <>
                      {activeAccordion === 'patient-intake' && (
                        <Image
                          src="/images/workflows/workflow_1.jpg"
                          alt="Patient Intake & Documentation"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                      {activeAccordion === 'orders-management' && (
                        <Image
                          src="/images/workflows/workflow_2.jpg"
                          alt="Orders Management"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                      {activeAccordion === 'clinical-documentation' && (
                        <Image
                          src="/images/workflows/workflow_3.jpg"
                          alt="Clinical Documentation & SOAP Notes"
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Right Side - Heading and Accordion (changes based on tab) */}
            <Reveal animation="fade-left" duration={900} delay={300}>
              <div>
                {/* Administrative Workflows Tab Content */}
                {activeTab === 'administrative' && (
                  <>
                    {/* Heading and subtitle */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-medium text-white mb-3">
                        Administrative Workflows
                      </h3>
                      <p className="text-sm text-white/60">
                        Automate administrative tasks and reduce operational burden
                      </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                      {/* Accordion Item 1 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'scheduling-coordination' ? '' : 'scheduling-coordination')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Scheduling & Resource Coordination</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'scheduling-coordination' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'scheduling-coordination' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              AI-assisted scheduling, resource allocation, and patient flow optimization to reduce wait times and improve operational efficiency.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Accordion Item 2 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'revenue-cycle' ? '' : 'revenue-cycle')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Revenue Cycle Management</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'revenue-cycle' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'revenue-cycle' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              Patient registration, insurance verification, billing, claims processing, and payment collection are structured within governed workflows. Clean claim rates and administrative efficiency improve when logic and documentation remain connected.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Accordion Item 3 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'transition-care' ? '' : 'transition-care')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Transition of Care Management</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'transition-care' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'transition-care' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              Discharge planning, referral coordination, and post-acute follow-up workflows supported by automated communication and tracking.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Clinical Workflows Tab Content */}
                {activeTab === 'clinical' && (
                  <>
                    {/* Heading and subtitle */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-medium text-white mb-3">
                        Clinical Workflows
                      </h3>
                      <p className="text-sm text-white/60">
                        Enhance clinical decision-making with AI-powered intelligence
                      </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                      {/* Accordion Item 1 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'patient-intake' ? '' : 'patient-intake')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Patient Intake & Documentation</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'patient-intake' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'patient-intake' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              Demographics capture, vital signs recording, allergy verification, and chief complaint documentation are structured with AI assistance.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Accordion Item 2 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'orders-management' ? '' : 'orders-management')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Orders Management</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'orders-management' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'orders-management' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              Physician order entry, diagnostic test ordering, medication prescribing, and order tracking supported by intelligent validation and workflow coordination.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Accordion Item 3 */}
                      <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/30">
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === 'clinical-documentation' ? '' : 'clinical-documentation')}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white">Clinical Documentation & SOAP Notes</h4>
                          <ChevronRightIcon 
                            className={`h-6 w-6 text-white transition-transform ${activeAccordion === 'clinical-documentation' ? 'rotate-90' : ''}`} 
                          />
                        </button>
                        {activeAccordion === 'clinical-documentation' && (
                          <div className="px-6 pb-5">
                            <p className="text-white/70 leading-relaxed text-sm">
                              Subjective, objective, assessment, and planning documentation supported by AI agents that assist while preserving structured records and oversight.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Role of AI Agents in Healthcare Workflows */}
      <section className="relative bg-black py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-[48px] font-medium text-white mb-12">Role of AI Agents in Healthcare Workflows</h2>
              <p className="text-xl text-white/80">AI agents in Stackyon:</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <Reveal animation="fade-up" duration={900} delay={100}>
              <div className="relative group h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-8 mt-8">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/20 rounded-xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <DocumentCheckIcon className="h-16 w-16 text-[#0066ff]/60" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Interpret clinical and administrative inputs from voice, text, and documents</h3>
                </div>
              </div>
            </Reveal>

            {/* Box 2 */}
            <Reveal animation="fade-up" duration={900} delay={200}>
              <div className="relative group h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-8 mt-8">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/20 rounded-xl transform -rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShieldCheckIcon className="h-16 w-16 text-[#0066ff]/60" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Support validation and decision points inside workflows</h3>
                </div>
              </div>
            </Reveal>

            {/* Box 3 */}
            <Reveal animation="fade-up" duration={900} delay={300}>
              <div className="relative group h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-8 mt-8">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/20 rounded-xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowPathIcon className="h-16 w-16 text-[#0066ff]/60" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Trigger next steps, approvals, or follow-up actions</h3>
                </div>
              </div>
            </Reveal>

            {/* Box 4 */}
            <Reveal animation="fade-up" duration={900} delay={400}>
              <div className="relative group h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-8 mt-8">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0033cc]/20 to-[#0066ff]/20 rounded-xl transform -rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserGroupIcon className="h-16 w-16 text-[#0066ff]/60" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Assist clinicians and staff without removing human oversight</h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Text */}
          <Reveal animation="fade-up" duration={900} delay={500}>
            <div className="text-center mt-16">
              <p className="text-lg text-white/70 max-w-4xl mx-auto">
                Intelligence operates alongside rules and process logic to ensure transparency and auditability
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Smart AI Services Section */}
      <section className="relative bg-gradient-to-br from-[#0033cc]/10 via-black to-[#0066ff]/10 py-24">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-[48px] font-medium text-white mb-6">Outcomes Healthcare Teams Care About</h2>
            </div>
          </Reveal>

          {/* First Row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Service Card 1 */}
            <Reveal animation="fade-up" duration={900} delay={100}>
              <div className="relative group h-full rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 p-10 hover:border-[#0066ff]/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-white/70 stroke-[1.5]">
                      <path d="M32 8L40 16L32 24L24 16L32 8Z" />
                      <path d="M48 24L56 32L48 40L40 32L48 24Z" />
                      <path d="M16 24L24 32L16 40L8 32L16 24Z" />
                      <path d="M32 40L40 48L32 56L24 48L32 40Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Reduce administrative burden</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Reveal>

            {/* Service Card 2 */}
            <Reveal animation="fade-up" duration={900} delay={200}>
              <div className="relative group h-full rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 p-10 hover:border-[#0066ff]/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-white/70 stroke-[1.5]">
                      <rect x="16" y="12" width="32" height="8" />
                      <rect x="16" y="24" width="32" height="8" />
                      <rect x="16" y="36" width="32" height="8" />
                      <rect x="16" y="48" width="32" height="8" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Improve documentation quality</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Reveal>

            {/* Service Card 3 */}
            <Reveal animation="fade-up" duration={900} delay={300}>
              <div className="relative group h-full rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 p-10 hover:border-[#0066ff]/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-white/70 stroke-[1.5]">
                      <path d="M32 8L48 24L32 40L16 24L32 8Z" />
                      <path d="M32 24L48 40L32 56L16 40L32 24Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Support care coordination</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Reveal>
          </div>

          {/* Second Row - 2 columns centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Service Card 4 */}
            <Reveal animation="fade-up" duration={900} delay={400}>
              <div className="relative group h-full rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 p-10 hover:border-[#0066ff]/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-white/70 stroke-[1.5]">
                      <path d="M16 16L24 8L40 24L48 16L56 24L40 40L56 56L48 48L32 32L24 40L16 32L32 16L16 16Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Improve claim accuracy and operational efficiency</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Reveal>

            {/* Service Card 5 */}
            <Reveal animation="fade-up" duration={900} delay={500}>
              <div className="relative group h-full rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 p-10 hover:border-[#0066ff]/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto">
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-white/70 stroke-[1.5]">
                      <polygon points="32,8 56,24 48,48 16,48 8,24" />
                      <polygon points="32,24 44,32 40,44 24,44 20,32" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Reduce clinician burnout by embedding assistance into workflows rather than adding separate tools</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Reveal>
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
