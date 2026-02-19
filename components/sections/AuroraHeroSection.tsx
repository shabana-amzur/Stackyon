'use client';

import { ReactNode } from 'react';

interface AuroraHeroSectionProps {
  children?: ReactNode;
  className?: string;
}

/**
 * AuroraHeroSection Component
 * 
 * Modern hero section with layered aurora-style gradient background
 * 
 * Features:
 * - Layered radial gradient blur elements
 * - Cyan and blue aurora tones
 * - Vignette fade edges
 * - Subtle grid pattern overlay
 * - Responsive scaling
 * - Performance-optimized animations
 * - Pointer-events-none for non-interactive gradients
 */
export default function AuroraHeroSection({ children, className = '' }: AuroraHeroSectionProps) {
  return (
    <section className={`relative isolate overflow-hidden min-h-screen ${className}`}>
      {/* Aurora Gradient Background Layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Dark navy base */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Aurora Layer 1 - Primary cyan glow */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(14, 165, 233, 0.25) 35%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -30%)',
          }}
        />
        
        {/* Aurora Layer 2 - Secondary blue glow */}
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(20, 184, 166, 0.2) 40%, transparent 70%)',
            filter: 'blur(90px)',
            transform: 'translate(50%, -20%)',
          }}
        />
        
        {/* Aurora Layer 3 - Accent teal glow */}
        <div 
          className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] md:w-[600px] md:h-[600px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(34, 211, 238, 0.15) 45%, transparent 70%)',
            filter: 'blur(70px)',
            transform: 'translate(-30%, 40%)',
          }}
        />
        
        {/* Vignette fade edges - top to bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(2, 6, 23, 0.4) 70%, #020617 100%)',
          }}
        />
        
        {/* Vignette fade edges - left to right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(2, 6, 23, 0.6) 0%, transparent 20%, transparent 80%, rgba(2, 6, 23, 0.6) 100%)',
          }}
        />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        
        {/* Additional fine mesh overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
        
        {/* Bottom gradient fade for smooth content transition */}
        <div 
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.9) 100%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {children || (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
              Build the future with{' '}
              <span className="bg-gradient-to-r from-[#0033cc] via-[#0066ff] to-[#0066ff] bg-clip-text text-transparent">
                Aurora Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the next generation of enterprise solutions with our AI-native platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0033cc] to-[#0066ff] text-white rounded-lg font-medium hover:opacity-90 hover:shadow-lg hover:shadow-[#0066ff]/50 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
