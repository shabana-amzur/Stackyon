'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

/**
 * Array of steps describing how the Stackyon platform works
 * Each step includes a title of platform capabilities
 */
const steps = [
  {
    title: 'Workflow Automation',
  },
  {
    title: 'Secure Data Handling',
  },
  {
    title: 'System Integration',
  },
];

/**
 * HowItWorksSection Component - Explains the platform's key components
 * 
 * Features:
 * - Two-column layout (steps on left, image on right)
 * - Background image with overlay for visual appeal
 * - Checkmark badges highlighting each capability
 * - Staggered reveal animations for each step
 * - Responsive design (stacks on mobile)
 * 
 * This section provides a clear breakdown of the platform's
 * main capabilities and how they work together.
 */
export default function HowItWorksSection() {
  return (
    <section className="relative bg-black overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://brighthub.casethemes.net/wp-content/uploads/2025/07/bg-step.jpg"
          alt="Stackyon platform background"
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Side - Steps */}
          <div>
            {/* Heading */}
            <Reveal animation="fade-up" duration={950} delay={140}>
              <h2 className="text-4xl md:text-[40px] font-medium text-white mb-4 leading-tight">
                Built to Handle Healthcare-Level Complexity and Beyond
              </h2>
            </Reveal>
            
            {/* Description */}
            <Reveal animation="fade-up" duration={950} delay={200}>
              <p className="text-white/70 mb-12 max-w-2xl" style={{ fontSize: '18px' }}>
                Stackyon has supported large-scale healthcare operations where workflows demand accuracy, security, and coordination across multiple stakeholders. In one nationwide prescription routing initiative, teams built a hyper-automated operational layer in 3.5 months, reducing resource requirements by 75%, enabling real-time visibility, and modernizing workflows without replacing core systems.
              </p>
            </Reveal>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Reveal
                  key={index}
                  animation="fade-up"
                  duration={1000}
                  delay={220 + index * 110}
                  className="flex gap-4"
                >
                  {/* Step Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                      <Check className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 flex items-center">
                    <h3 className="font-semibold text-white" style={{ fontSize: '1.2rem' }}>
                      {step.title}
                    </h3>
                    {/* Descriptions intentionally removed per updated messaging */}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal animation="fade-up" duration={950} delay={220 + steps.length * 110}>
              <a
                href="/platform"
                className="mt-10 relative group inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#12efeb] to-[#523bdc] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#12efeb] via-[#3e7ae5] to-[#523bdc] border border-transparent text-white font-medium text-base transition-all duration-500 bg-[length:200%_100%] bg-left hover:bg-right">
                  See How Operational Applications Are Built
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Right Side - Mockup */}
          <Reveal animation="zoom-in" duration={1050} delay={320}>
            <div className="relative">
              {/* Image container with glow border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
                boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)'
              }}>
                <Image
                  src="/images/doctor-leveraging-ai-technology-disease-investigation.jpg"
                  alt="Healthcare professionals using Stackyon platform with data visualization"
                  width={1200}
                  height={1200}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
