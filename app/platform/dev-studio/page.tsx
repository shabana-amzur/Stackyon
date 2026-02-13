'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CubeIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  CommandLineIcon,
  ArrowPathIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Reveal from '@/components/ui/Reveal';

const features = [
  {
    id: "legacy-modernization",
    title: "Legacy application modernization",
    description: "",
    icon: Squares2X2Icon,
    iconClasses: "bg-blue-500 bg-opacity-10 text-blue-300",
  },
  {
    id: "rule-heavy-workflows",
    title: "Rule-heavy enterprise workflows",
    description: "",
    icon: CommandLineIcon,
    iconClasses: "bg-cyan-500 bg-opacity-10 text-cyan-300",
  },
  {
    id: "regulated-systems",
    title: "Regulated operational systems",
    description: "",
    icon: CubeIcon,
    iconClasses: "bg-cyan-500 bg-opacity-10 text-cyan-300",
  },
  {
    id: "proprietary-platforms",
    title: "Proprietary internal platforms",
    description: "",
    icon: PaintBrushIcon,
    iconClasses: "bg-teal-500 bg-opacity-10 text-teal-300",
  },
  {
    id: "user-journeys",
    title: "User Journey Mapping",
    description: "Visualize and optimize the entire user experience from start to finish with journey mapping tools.",
    icon: ArrowPathIcon,
    iconClasses: "bg-indigo-500 bg-opacity-10 text-indigo-300",
  },
  {
    id: "version-control",
    title: "Built-in Versioning",
    description: "Track changes, rollback when needed, and collaborate with confidence using integrated version control.",
    icon: CodeBracketIcon,
    iconClasses: "bg-sky-500 bg-opacity-10 text-sky-300",
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
    duration: (Math.random() * 20 + 15) * 0.9,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

export default function DevStudioPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | string>("dev-studio");
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
        <div className="absolute inset-0 -z-20" suppressHydrationWarning>
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="/color_bg.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Aurora-style gradient background */}
        <div className="absolute inset-0 -z-10">
          {/* Dark base background */}
          <div className="absolute inset-0 bg-[#020617] z-0"></div>
          
          {/* Multi-layer gradient overlays */}
          {/* Primary aurora glow - center-left emphasis */}
          <div 
            className="absolute inset-0 z-5 animate-aurora"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 35% 50%, 
                rgba(34, 211, 238, 0.35) 0%, 
                rgba(14, 165, 233, 0.25) 25%, 
                rgba(20, 184, 166, 0.15) 50%, 
                transparent 70%)`,
              filter: 'blur(60px)',
            }}
          ></div>
          
          {/* Secondary glow layer - adds depth */}
          <div 
            className="absolute inset-0 z-6 animate-glow"
            style={{
              background: `radial-gradient(circle at 30% 40%, 
                rgba(34, 211, 238, 0.2) 0%, 
                rgba(14, 165, 233, 0.15) 30%, 
                transparent 60%)`,
              filter: 'blur(80px)',
              animationDelay: '2s'
            }}
          ></div>
          
          {/* Tertiary accent glow */}
          <div 
            className="absolute inset-0 z-7"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 40% 45%, 
                rgba(20, 184, 166, 0.25) 0%, 
                rgba(14, 165, 233, 0.15) 40%, 
                transparent 65%)`,
              filter: 'blur(70px)',
            }}
          ></div>
          
          {/* Edge vignette fade to navy/black */}
          <div 
            className="absolute inset-0 z-8"
            style={{
              background: `linear-gradient(90deg, 
                #020617 0%, 
                rgba(2, 6, 23, 0.3) 15%, 
                transparent 40%, 
                transparent 60%, 
                rgba(2, 6, 23, 0.3) 85%, 
                #020617 100%)`,
            }}
          ></div>
          
          {/* Text area bloom for contrast */}
          <div 
            className="absolute inset-0 z-9"
            style={{
              background: `radial-gradient(ellipse 50% 40% at 50% 30%, 
                rgba(255, 255, 255, 0.03) 0%, 
                transparent 50%)`,
            }}
          ></div>
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 z-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), 
                linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              opacity: 0.15
            }}
          ></div>
          
          {/* Fine mesh overlay for depth */}
          <div 
            className="absolute inset-0 z-21"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), 
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
              backgroundSize: '25px 25px',
              opacity: 0.08
            }}
          ></div>
          
          {/* Gradient fade at bottom for smooth transition to cards */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 z-25"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #020617 100%)',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <Reveal animation="fade-up" duration={900} delay={100}>
              <h1 style={{color: '#0efffb'}} className="text-[60px] font-medium leading-tight tracking-tight mb-6">
                Design enterprise applications
                <br />
                around real business workflows
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal animation="fade-up" duration={900} delay={200}>
              <p className="text-lg md:text-xl text-white opacity-70 leading-relaxed max-w-3xl mb-8">
                A visual, model-driven workspace for building and evolving applications with complex processes, rules, and user journeys, without scattering logic across code and tools.
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
                  See dev studio in action
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/platform"
                  style={{backgroundColor: 'rgba(79, 179, 217, 0.2)', borderColor: 'rgba(79, 179, 217, 0.4)'}}
                  className="inline-flex items-center justify-center rounded-lg border px-12 py-4 text-base font-medium text-white transition-all duration-300 hover:opacity-80"
                >
                  Explore the platform
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
                  src="/images/products/dev-studio.jpg"
                  alt="Dev Studio Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screenshot 2 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/agentic-hub.jpg"
                  alt="Agentic AI Hub Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Screenshot 3 */}
              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/dev-studio.jpg"
                  alt="Platform Workflow"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Duplicate screenshots for seamless loop */}
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
                  alt="Agentic AI Hub Platform"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-shrink-0 w-96 h-72 rounded-lg overflow-hidden shadow-2xl border border-white border-opacity-10 bg-slate-900">
                <Image
                  src="/images/products/dev-studio.jpg"
                  alt="Platform Workflow"
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

      {/* What is Dev Studio Section */}
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
            0% { transform: translate(0, 0); opacity: 1; }
            25% { transform: translate(10px, -20px); opacity: 0.8; }
            50% { transform: translate(-5px, -10px); opacity: 1; }
            75% { transform: translate(5px, -15px); opacity: 0.9; }
            100% { transform: translate(0, 0); opacity: 1; }
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
                  Enterprise applications are built to change
                </h2>
                
                {/* Text */}
                <div className="space-y-6">
                  <p className="text-white opacity-70" style={{ fontSize: '35px', fontWeight: 100, fontFamily: 'Poppins, sans-serif', lineHeight: 1.3 }}>
                    Enterprise applications are rarely simple. They evolve with business rules, policies, and integrations that can't be rewritten every time something changes. Dev Studio was built to let teams work directly with how the business operates, instead of translating requirements into brittle implementations.
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
                What you can do with Dev Studio
              </h2>
            </Reveal>
          </div>

          {/* Features Grid - First Row (2 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-20 gap-6 mb-6">
            {/* Feature Card 1 - Model workflows */}
            <Reveal animation="fade-up" duration={900} delay={200} className="lg:col-span-9 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Model workflows and process logic
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Design conditional, parallel, and long-running processes visually, with execution behavior that reflects real operational flow.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Model workflows and process logic"
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Feature Card 2 - Define rules and decisions */}
            <Reveal animation="fade-up" duration={900} delay={250} className="lg:col-span-11 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Define rules and decisions explicitly
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Configure business rules and decision tables so logic remains transparent, traceable, and easy to change over time.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Define rules and decisions explicitly"
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
            {/* Feature Card 2 - Define rules and decisions (reversed position) */}
            <Reveal animation="fade-up" duration={900} delay={300} className="lg:col-span-11 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Design intuitive user journeys
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Define UI flows and user interactions as part of the application, not as a separate layer that needs rework later.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Define rules and decisions explicitly"
                      width={800}
                      height={480}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Feature Card 1 - Model workflows (reversed position) */}
            <Reveal animation="fade-up" duration={900} delay={350} className="lg:col-span-9 flex">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-black flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 p-8 pb-4 h-[220px] flex flex-col justify-start">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Work with enterprise data and systems
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Model data structures and integrate with existing systems without replacing what already works.
                  </p>
                </div>
                <div className="relative flex-1 flex items-end">
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src="/feature-2.webp"
                      alt="Model workflows and process logic"
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

      {/* Built for Life After Go-Live Section */}
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
                  Built for life after go-live
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Most platforms focus on how quickly an application can be built. Dev Studio is designed for what happens after go-live. Workflows, rules, decisions, and user experiences remain visible and governable as applications evolve, without rewrites, fragile handoffs, or loss of control.
                </p>
              </Reveal>
            </div>

            {/* Right Side - 50% */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1 - Workflows */}
                <Reveal animation="fade-up" duration={900} delay={200}>
                  <div 
                    className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900/50 p-8 hover:border-cyan-500/40 transition-all duration-300"
                    style={{
                      animation: 'floatUp 4s ease-in-out infinite',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white">Workflows</h3>
                  </div>
                </Reveal>

                {/* Card 2 - Rules */}
                <Reveal animation="fade-up" duration={900} delay={250}>
                  <div 
                    className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-900/50 p-8 hover:border-blue-500/40 transition-all duration-300 mt-12"
                    style={{
                      animation: 'floatDown 4.5s ease-in-out infinite',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white">Rules</h3>
                  </div>
                </Reveal>

                {/* Card 3 - Decisions */}
                <Reveal animation="fade-up" duration={900} delay={300}>
                  <div 
                    className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-slate-900/50 p-8 hover:border-purple-500/40 transition-all duration-300 -mt-6"
                    style={{
                      animation: 'floatUp 4.2s ease-in-out infinite',
                      animationDelay: '0.5s',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white">Decisions</h3>
                  </div>
                </Reveal>

                {/* Card 4 - User-experience */}
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
                    <h3 className="text-2xl font-medium text-white">User-experience</h3>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where teams typically use Dev Studio Section */}
      <section id="features" className="relative bg-black pt-[80px] pb-[150px]">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-[45px] font-medium text-white">
                Where teams typically use Dev Studio
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
                  <h3 className="text-xl font-semibold text-white leading-tight">
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
