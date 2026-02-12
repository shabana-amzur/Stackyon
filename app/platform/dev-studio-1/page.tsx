'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

export default function DevStudio1Page() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | string>("dev-studio");

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Banner - Centered Layout */}
      <section className="relative isolate overflow-hidden min-h-[600px] pt-12 pb-20">
        {/* Dynamic blue gradient background with mesh */}
        <div className="absolute inset-0 -z-10 bg-black">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black"></div>
          
          {/* Animated gradient blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Mesh grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Keyframe animations */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            50% {
              transform: translate(100px, 0px) scale(1.1);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 8s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <Reveal animation="fade-up" duration={900} delay={100}>
              <h1 style={{color: '#0efffb'}} className="text-6xl font-medium leading-tight tracking-tight mb-6">
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
      <section className="relative -mt-20 pt-12 pb-16 overflow-hidden w-full">
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
      <section style={{backgroundColor: '#030711'}} className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-60"></div>
          <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-cyan-500 opacity-15 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal animation="fade-up" duration={950} delay={100}>
            <div className="grid gap-24 lg:grid-cols-[30%_70%] text-white">
                {/* Left Column - Title */}
                <div>
                  <h2 className="text-4xl font-medium leading-tight md:text-5xl">
                    Enterprise applications are built to change
                  </h2>
                </div>
                
                {/* Right Column - Text */}
                <div className="space-y-6">
                  <p className="text-lg text-white opacity-70 leading-relaxed">
                    Enterprise applications are rarely simple. They evolve with business rules, policies, and integrations that can't be rewritten every time something changes. Dev Studio was built to let teams work directly with how the business operates, instead of translating requirements into brittle implementations.
                  </p>
                </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platform Features Section with Accordion */}
      <section className="relative pt-16 pb-12 overflow-visible bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-24 lg:grid-cols-[400px_1fr] items-start">
            {/* Left Column - Accordion */}
            <div className="space-y-4">
              {/* Main Title */}
              <div className="mb-8">
                <p className="text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                  Key features
                </p>
                <h2 className="text-4xl md:text-5xl font-medium text-white">
                  What you can do with Dev Studio
                </h2>
              </div>

              {/* Accordion Items */}
              <div className="space-y-2">
                {[
                  {
                    id: "dev-studio",
                    title: "Model workflows and process logic",
                    description: "Design conditional, parallel, and long-running processes visually, with execution behavior that reflects real operational flow.",
                    image: "/images/products/dev-studio.jpg",
                  },
                  {
                    id: "agentic-ai-hub",
                    title: "Define rules and decisions explicitly",
                    description: "Configure business rules and decision tables so logic remains transparent, traceable, and easy to change over time.",
                    image: "/images/products/agentic-hub.jpg",
                  },
                  {
                    id: "user-journeys",
                    title: "Design intuitive user journeys",
                    description: "Define UI flows and user interactions as part of the application, not as a separate layer that needs rework later.",
                    image: "/images/products/dev-studio.jpg",
                  },
                  {
                    id: "enterprise-data",
                    title: "Work with enterprise data and systems",
                    description: "Model data structures and integrate with existing systems without replacing what already works.",
                    image: "/images/products/dev-studio.jpg",
                  },
                ].map((feature) => (
                  <div key={feature.id} className="border-b border-white border-opacity-10">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === feature.id ? '' : feature.id)}
                      className={`flex w-full items-center justify-between py-4 text-left transition-colors ${
                        activeAccordion === feature.id ? 'text-white' : 'text-white opacity-60 hover:text-white'
                      }`}
                    >
                      <span className="text-base font-medium tracking-wide">
                        {feature.title}
                      </span>
                      <ChevronRightIcon className={`h-5 w-5 text-white opacity-60 transition-transform duration-300 ${
                        activeAccordion === feature.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {activeAccordion === feature.id && (
                      <div className="pb-4">
                        <p className="text-sm text-white opacity-70 leading-relaxed">
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
                  src: activeAccordion === "dev-studio" ? "/images/products/dev-studio.jpg" : "/images/products/agentic-hub.jpg",
                  alt: activeAccordion === "dev-studio" ? "Dev Studio" : "Agentic AI Hub"
                })}
                className="group block w-full cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white border-opacity-10 shadow-2xl bg-black transition-all duration-300 hover:border-white hover:border-opacity-30 hover:shadow-cyan-500 hover:shadow-2xl">
                  <Image
                    src={activeAccordion === "dev-studio" ? "/images/products/dev-studio.jpg" : "/images/products/agentic-hub.jpg"}
                    alt={activeAccordion === "dev-studio" ? "Dev Studio" : "Agentic AI Hub"}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-105"
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="max-w-3xl mx-auto text-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                    Built for life after go-live
                  </h2>
                  <p className="text-lg text-white opacity-90 leading-relaxed">
                    Most platforms focus on how quickly an application can be built. Dev Studio is designed for what happens after go-live. Workflows, rules, decisions, and user experiences remain visible and governable as applications evolve, without rewrites, fragile handoffs, or loss of control.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal animation="fade-up" duration={900} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white">
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
                <div className="group relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 opacity-50 p-8 border border-white border-opacity-5 hover:border-white hover:border-opacity-10 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconClasses} mb-6`}>
                    <feature.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA Section for Dev Studio */}
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
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
          <Reveal animation="fade-up" duration={950} delay={120}>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white mb-4">
              See Dev Studio in action
            </h2>
            <p className="text-xl text-white opacity-70 max-w-2xl">
              See how teams design and evolve enterprise applications without rework.
            </p>
          </Reveal>

          <Reveal animation="fade-up" duration={1000} delay={220}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/demo" className="relative group">
                <div style={{backgroundColor: '#3e7ae5'}} className="absolute inset-0 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
                <div style={{backgroundColor: '#3e7ae5'}} className="relative flex items-center gap-2 rounded-lg border border-transparent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:opacity-90">
                  See Dev Studio in Action
                  <LinkIcon className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/platform/agentic-ai-hub"
                className="rounded-lg bg-transparent border border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Explore Agentic AI Hub
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
