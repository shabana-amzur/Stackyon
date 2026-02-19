'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
    id: "decision-intensive",
    title: "Decision-intensive enterprise workflows",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: CpuChipIcon,
    iconClasses: "bg-[#0033cc]/10 text-[#0033cc]",
  },
  {
    id: "validation-heavy",
    title: "Validation-heavy processes",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: ShieldCheckIcon,
    iconClasses: "bg-[#0066ff]/10 text-[#0066ff]",
  },
  {
    id: "assisted-decisions",
    title: "Applications requiring recommendations or assisted decisions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Squares2X2Icon,
    iconClasses: "bg-[#0033cc]/10 text-[#0066ff]",
  },
  {
    id: "regulated-systems",
    title: "Regulated systems where auditability is required",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: CommandLineIcon,
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

export default function AgenticAIHubPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | string>("agentic-ai-hub");
  const particlesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [particles, setParticles] = useState<ParticleConfig[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    setParticles(createParticles());
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, [isMounted]);

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

  return (
    <div className="min-h-screen w-full bg-black pt-[20px]">
      {/* Hero Banner - Centered Layout */}
      <section className="relative isolate overflow-hidden min-h-[600px] pt-[78px] pb-0">
        {/* Keyframe animations */}
        <style jsx>{`
          @keyframes auroraShift {
            0% {
              transform: translate(0%, 0%) rotate(0deg);
              opacity: 0.8;
            }
            33% {
              transform: translate(5%, -2%) rotate(3deg);
              opacity: 0.9;
            }
            66% {
              transform: translate(-3%, 3%) rotate(-2deg);
              opacity: 0.85;
            }
            100% {
              transform: translate(0%, 0%) rotate(0deg);
              opacity: 0.8;
            }
          }
          @keyframes auroraGlow {
            0% {
              opacity: 0.6;
            }
            50% {
              opacity: 0.9;
            }
            100% {
              opacity: 0.6;
            }
          }
          @keyframes floatMove {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(20px, -15px);
            }
            50% {
              transform: translate(-15px, 10px);
            }
            75% {
              transform: translate(10px, 20px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
          .animate-aurora {
            animation: auroraShift 12s ease-in-out infinite;
          }
          .animate-glow {
            animation: auroraGlow 8s ease-in-out infinite;
          }
        `}</style>

        {/* Video Background */}
        <div className="absolute inset-0 z-0" suppressHydrationWarning>
          {isMounted && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/ai_hub_bg_video.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Content */}
        <div className="relative z-30 mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <Reveal animation="fade-up" duration={900} delay={100}>
              <h1 style={{color: '#0efffb'}} className="text-[60px] font-medium leading-tight tracking-tight mb-6">
                Embed intelligence directly
                <br />
                into enterprise workflows
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal animation="fade-up" duration={900} delay={200}>
              <p className="text-lg md:text-xl text-white opacity-70 leading-relaxed max-w-3xl mb-8">
                Agentic AI Hub enables organizations to introduce AI into business applications in a controlled, intentional way. Intelligence operates inside workflows, alongside rules and process logic, instead of existing as a separate layer outside the system.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal animation="fade-up" duration={900} delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Primary Button */}
                <Link
                  href="#features"
                  style={{backgroundColor: '#0efffb'}}
                  className="inline-flex items-center justify-center rounded-lg px-12 py-4 text-base font-medium text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  See Agentic AI Hub in action
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/platform"
                  style={{backgroundColor: 'rgba(79, 179, 217, 0.2)', borderColor: 'rgba(79, 179, 217, 0.4)'}}
                  className="inline-flex items-center justify-center rounded-lg border px-12 py-4 text-base font-medium text-white transition-all duration-300 hover:opacity-80"
                >
                  Explore the Platform
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Auto-scrolling Platform Screenshots Carousel */}
      <section className="relative pb-[80px] overflow-hidden w-full">
        <div className="relative w-full">
          {/* Carousel wrapper */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* Screenshot 1 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/agentic-hub.jpg"
                  alt="Agentic AI Hub Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screenshot 2 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/dev-studio.jpg"
                  alt="Dev Studio Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screenshot 3 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/agentic-hub.jpg"
                  alt="AI Platform Workflow"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Duplicate screenshots for seamless loop */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/agentic-hub.jpg"
                  alt="Agentic AI Hub Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/dev-studio.jpg"
                  alt="Dev Studio Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/agentic-hub.jpg"
                  alt="AI Platform Workflow"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Carousel animation styles */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}</style>
      </section>

      {/* AI that works within your business rules Section */}
      <section className="relative py-[80px] overflow-hidden" suppressHydrationWarning>
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
            25% { transform: translateY(-25px); opacity: 0.8; }
            50% { transform: translateY(-50px); opacity: 1; }
            75% { transform: translateY(-75px); opacity: 0.9; }
            100% { transform: translateY(-100px); opacity: 0; }
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
                  Enterprise AI needs structure, not experiments
                </h2>
                
                {/* Text */}
                <div className="space-y-6">
                  <p className="text-white opacity-70" style={{ fontSize: '35px', fontWeight: 100, fontFamily: 'Poppins, sans-serif', lineHeight: 1.3 }}>
                    In most enterprise systems, AI is added as an external service or isolated capability. This makes decisions harder to govern, explain, and evolve over time. Agentic AI Hub was built to ensure intelligence becomes part of how applications operate, without compromising transparency or control.
                  </p>
                </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-[80px] overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal animation="fade-up" duration={900} delay={100}>
              <div className="inline-block mb-6">
                <span className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium">
                  Features
                </span>
              </div>
              <h2 className="text-[45px] font-medium text-white mb-6">
                What you can do with Agentic AI Hub
              </h2>
            </Reveal>
          </div>

          {/* Features Grid - First Row (2 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-20 gap-6 mb-6">
            {/* Feature Card 1 - Configure AI decision points */}
            <Reveal animation="fade-up" duration={900} delay={200} className="lg:col-span-9 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0033cc]/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Embed ai at decision points
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Configure agents to operate where validation, judgment, or recommendations are required within workflows.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Configure AI decision points within workflows"
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Feature Card 2 - Set guardrails and validation rules */}
            <Reveal animation="fade-up" duration={900} delay={250} className="lg:col-span-11 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Interpret inputs and context
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Use agents to interpret documents, data, and user inputs as part of an application flow.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Set guardrails and validation rules for AI outputs"
                      width={800}
                      height={480}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Features Grid - Second Row (2 columns in reverse order) */}
          <div className="grid grid-cols-1 lg:grid-cols-20 gap-6 mb-6">
            {/* Feature Card 2 - Build audit trails (reversed position) */}
            <Reveal animation="fade-up" duration={900} delay={300} className="lg:col-span-11 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Trigger actions and next steps
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Allow agents to initiate workflow transitions, approvals, or follow-up actions based on defined conditions.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Build audit trails for AI-driven actions"
                      width={800}
                      height={480}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Feature Card 1 - Design human-in-the-loop approval flows (reversed position) */}
            <Reveal animation="fade-up" duration={900} delay={350} className="lg:col-span-9 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Support human-in-the-loop scenarios
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Design workflows where AI assists decision-making while keeping humans involved when required.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Design human-in-the-loop approval flows"
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Built for governance and control Section */}
      <section className="relative py-[80px] overflow-hidden bg-black">
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

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
            {/* Left Side - 50% */}
            <div className="lg:col-span-5">
              <Reveal animation="fade-up" duration={900} delay={100}>
                <h2 className="text-[45px] font-medium text-white mb-6 leading-tight">
                  Intelligence that works with rules, not around them
                </h2>
                <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                  <p>
                    Agentic AI Hub does not replace business rules or process logic. Agents operate alongside rules and decisions, ensuring that intelligence remains predictable, explainable, and auditable as applications evolve.
                  </p>
                  <p>
                    This allows AI behavior to change safely as policies, data, and operational conditions change.
                  </p>
                </div>
              </Reveal>

              <Reveal animation="fade-up" duration={900} delay={200}>
                <div className="mt-12 space-y-4">
                  <h2 className="text-[45px] font-medium text-white leading-tight">
                    Built for enterprise trust
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Agentic AI Hub is designed for environments where decisions carry risk and accountability matters. AI-driven actions remain visible, governed, and aligned with enterprise controls rather than operating as opaque black boxes.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Side - 50% */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1 - Decision Points */}
                <Reveal animation="fade-up" duration={900} delay={200}>
                  <div 
                    className="relative rounded-2xl border border-[#0066ff]/20 bg-gradient-to-br from-[#0066ff]/10 to-slate-900/50 p-8 hover:border-[#0066ff]/40 transition-all duration-300"
                    style={{
                      animation: 'floatUp 4s ease-in-out infinite',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0066ff]/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Governed Decisions</h3>
                    <p className="text-white/60 text-sm">AI actions remain policy-aware and compliant.</p>
                  </div>
                </Reveal>

                {/* Card 2 - Guardrails */}
                <Reveal animation="fade-up" duration={900} delay={250}>
                  <div 
                    className="relative rounded-2xl border border-[#0066ff]/20 bg-gradient-to-br from-[#0066ff]/10 to-slate-900/50 p-8 hover:border-[#0066ff]/40 transition-all duration-300 mt-12"
                    style={{
                      animation: 'floatDown 4.5s ease-in-out infinite',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0066ff]/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Explainable Behaviour</h3>
                    <p className="text-white/60 text-sm">Every output is traceable and auditable.</p>
                  </div>
                </Reveal>

                {/* Card 3 - Audit Trails */}
                <Reveal animation="fade-up" duration={900} delay={300}>
                  <div 
                    className="relative rounded-2xl border border-[#0033cc]/20 bg-gradient-to-br from-[#0033cc]/10 to-slate-900/50 p-8 hover:border-[#0033cc]/40 transition-all duration-300 -mt-6"
                    style={{
                      animation: 'floatUp 4.2s ease-in-out infinite',
                      animationDelay: '0.5s',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0033cc]/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#0033cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Operational Alignment</h3>
                    <p className="text-white/60 text-sm">Agents work within real workflows, not outside them.</p>
                  </div>
                </Reveal>

                {/* Card 4 - Human Oversight */}
                <Reveal animation="fade-up" duration={900} delay={350}>
                  <div 
                    className="relative rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-slate-900/50 p-8 hover:border-green-500/40 transition-all duration-300 mt-6"
                    style={{
                      animation: 'floatDown 4.8s ease-in-out infinite',
                      animationDelay: '0.3s',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Risk-Aware Intelligence</h3>
                    <p className="text-white/60 text-sm">Designed for regulated, high-accountability environments.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where teams typically use Agentic AI Hub Section */}
      <section id="features" className="relative bg-black pt-[80px] pb-[150px]">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-[45px] font-medium text-white">
                Where teams typically use Agentic AI Hub
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
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
                  <h3 className="text-xl font-semibold text-white leading-tight mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  {feature.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  )}

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0033cc]/5 to-[#0066ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-black py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/digital-information-technology-concept-man-use-cybersecurity-computers-protect-against-online.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
          <Reveal animation="fade-up" duration={950} delay={120}>
            <h2 className="text-[45px] font-medium leading-tight text-white">
              See Agentic AI Hub in action
            </h2>
          </Reveal>

          <Reveal animation="fade-up" duration={1000} delay={180}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              See how intelligence operates inside workflows without breaking enterprise control.
            </p>
          </Reveal>

          <Reveal animation="fade-up" duration={1000} delay={220}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/platform/agentic-ai-hub" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0033cc] to-[#0066ff] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
                <div className="relative flex items-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-[#0033cc] to-[#0066ff] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:opacity-90">
                  Explore Agentic AI Hub
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-90 p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-screen max-w-screen-lg">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="h-auto w-auto max-h-screen max-w-full rounded-lg"
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
