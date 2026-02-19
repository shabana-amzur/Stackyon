'use client';

import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Configuration for a single particle in the animated background
 * @property {number} opacity - Particle opacity (0-1)
 * @property {number} size - Particle diameter in pixels
 * @property {number} duration - Animation duration in seconds
 * @property {number} x - Horizontal position as percentage (0-100)
 * @property {number} y - Vertical position as percentage (0-100)
 * @property {number} delay - Animation start delay in seconds
 */
type ParticleConfig = {
  opacity: number;
  size: number;
  duration: number;
  x: number;
  y: number;
  delay: number;
};

/** Number of particles to generate in the background */
const PARTICLE_COUNT = 120;

/**
 * Generates random particle configurations for the background animation
 * @returns {ParticleConfig[]} Array of particle configurations
 */
const createParticles = (): ParticleConfig[] =>
  Array.from({ length: PARTICLE_COUNT }, () => ({
    opacity: Math.random() * 0.6 + 0.2,
    size: Math.random() * 2.5 + 1,
    duration: (Math.random() * 20 + 15) * 0.9,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

/**
 * HeroSection Component - Main hero/banner section with interactive particles
 * 
 * This is the first section users see, featuring:
 * - Animated particle background that responds to mouse movement
 * - Floating callout cards showcasing key features
 * - Main headline with gradient text
 * - Call-to-action buttons
 * - Optional video modal for product demo
 * 
 * Interactions:
 * - Particles move away from cursor within 200px radius
 * - Smooth transitions with CSS animations
 * - Video modal with backdrop and close button
 * 
 * Technical features:
 * - 120 particles with randomized properties
 * - Mouse tracking with distance-based force calculation
 * - Gradient orb effects for visual depth
 * - Responsive design with mobile-optimized layout
 */
export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
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
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-[60px]">
      {/* Particles - Full Width */}
      {typeof window !== 'undefined' && (
      <div ref={particlesRef} className="stars-container absolute inset-0">
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

      {/* Floating callouts */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        <div className="hero-float-card hero-float-1 absolute left-[2%] top-[18%] flex w-64 flex-col gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0033cc]/35 via-[#0066ff]/15 to-[#0033cc]/10 px-6 py-5 shadow-[0_30px_80px_-40px_rgba(0,102,255,0.55)] backdrop-blur-xl">
          <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3rem] text-sky-300/80">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#0033cc] to-[#0066ff]" />
            Website
          </span>
          <p className="text-[17px] font-semibold text-white">AI-crafted layouts in seconds</p>
          <p className="text-[14px] text-white/60">Generate responsive pages, preview instantly, and ship live in one click.</p>
        </div>

        <div className="hero-float-card hero-float-2 absolute right-[2%] bottom-[15%] flex w-72 flex-col gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0066ff]/35 via-[#0033cc]/15 to-[#0066ff]/25 px-6 py-6 shadow-[0_40px_90px_-45px_rgba(0,102,255,0.55)] backdrop-blur-xl">
          <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3rem] text-violet-300/80">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#0033cc] to-[#0066ff] text-[0.65rem] font-bold text-white">
              AI
            </span>
            SaaS
          </span>
          <p className="text-[17px] font-semibold text-white">Automated user provisioning</p>
          <p className="text-[14px] text-white/60">Launch multi-tenant apps with billing, auth, and environments prebuilt.</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-4 pt-12">
        {/* Inner box with gradient */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient orb effect - contained in box */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#0066ff]/30 via-[#0033cc]/15 to-transparent blur-3xl" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-8 py-4 flex flex-col items-center text-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 mt-2"
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#0033cc]/20 to-[#0066ff]/20 border border-[#0066ff]/30 text-sm font-semibold text-white backdrop-blur-sm">
                No Code. No Limits.
              </span>
            </motion.div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 max-w-6xl leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                Agentic
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                AI-powered
              </motion.span>
              <br/>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-[#0033cc] via-[#0066ff] to-[#0066ff] bg-clip-text text-transparent inline-block"
              >
                Enterprise-Grade
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-[#0033cc] via-[#0066ff] to-[#0066ff] bg-clip-text text-transparent inline-block"
              >
                Apps
              </motion.span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl leading-relaxed">
              Build, automate, and deploy complex business applications with AI Agents, drag-and-drop workflows, and a complete end-to-end Dev Studio, all without writing a single line of code. From legacy modernization to net-new digital apps, Stackyon delivers production-ready enterprise solutions in a fraction of the time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Get Started Button */}
                <button className="flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-[#0033cc] to-[#0066ff] text-white font-semibold text-lg transition-all duration-300 hover:opacity-90">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
              
              {/* Play Button with Border - Larger Size */}
              <button 
                onClick={() => setShowVideo(true)}
                className="relative group mt-8"
              >
                <div className="relative w-[90px] h-[90px] rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#0033cc] to-[#0066ff]">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Curved bottom section - inside box */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"
                fill="currentColor"
                className="text-black opacity-80"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/E44ucjCKDIo?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -25px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(35px, 15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
}
