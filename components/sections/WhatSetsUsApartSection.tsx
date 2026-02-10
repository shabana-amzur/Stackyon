'use client';

import Image from 'next/image';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

/**
 * Array of feature cards showing platform capabilities
 * Each card includes an image, title, and description
 */
const cards = [
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Drag-and-Drop Workflow Builder',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Business Rules Engine & Decision Tables',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Widget-Based UI Designer',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'AI Agent Configuration',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Data Modeling & Integrations',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Instant Deployment Across Environments',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'Event-Driven Logic & Parallel Execution',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    image: '/images/products/agentic-configuration.jpg',
    imageAlt: 'Agent configuration workspace UI',
    title: 'No Code Footprint (No Code Generation)',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
];

/**
 * WhatSetsUsApartSection Component - Showcases key platform features
 * 
 * Displays a grid of feature cards organized in variable-width rows:
 * - Row 1: 3 cards (3-column grid)
 * - Row 2: 2 cards (2-column grid)
 * - Row 3: 3 cards (3-column grid)
 * 
 * Features:
 * - Click-to-zoom image lightbox
 * - Staggered reveal animations
 * - Responsive card layouts
 * - Gradient backgrounds with hover effects
 * - Card elevation and shadow transitions
 * 
 * Each card includes:
 * - Feature screenshot (clickable for lightbox)
 * - Title and description
 * - Glass-morphism effect background
 * 
 * State:
 * - lightbox: Controls the image zoom modal
 */
export default function WhatSetsUsApartSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  let cardSerial = 0;

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-[40px] font-medium text-white reveal-child" style={{ transitionDelay: '140ms' }}>
            From Idea to Action in Minutes
          </h2>
          <p className="max-w-3xl text-lg text-white/70 reveal-child" style={{ transitionDelay: '200ms' }}>
            We blend real-time transparency, bank-grade security, and predictive intelligence to power the next generation of finance experiences.
          </p>
        </div>
        {[
          { items: cards.slice(0, 3), columns: 'md:grid-cols-2 lg:grid-cols-3' },
          { items: cards.slice(3, 5), columns: 'md:grid-cols-2 lg:grid-cols-2' },
          { items: cards.slice(5, 8), columns: 'md:grid-cols-2 lg:grid-cols-3' },
        ].map((row, rowIndex) => (
          <div key={rowIndex} className={`grid gap-8 ${row.columns} ${rowIndex > 0 ? 'mt-10' : ''} items-stretch`}>
            {row.items.map((card) => {
              const delay = 220 + cardSerial * 80;
              cardSerial += 1;
              return (
                <Reveal
                  key={card.title}
                  animation="fade-up"
                  duration={1050}
                  delay={delay}
                  className="h-full"
                >
                  <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/80 p-8 shadow-[0_40px_120px_-40px_rgba(2,20,34,0.6)] backdrop-blur-xl">
                    {card.image && (
                      <button
                        type="button"
                        onClick={() => setLightbox({ src: card.image!, alt: card.imageAlt ?? card.title })}
                        className="group mb-6 block w-full flex-shrink-0 focus:outline-none"
                      >
                        <div className="relative h-56 w-full overflow-hidden rounded-lg bg-gradient-to-br from-white to-white/90 shadow-[0_25px_65px_-40px_rgba(15,23,42,0.8)]">
                          <Image
                            src={card.image}
                            alt={card.imageAlt ?? card.title}
                            fill
                            className="object-cover object-left-top transition-transform duration-700 origin-top-left scale-[1.8] group-hover:scale-[1.9]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                        <span className="sr-only">Open {card.title} image in lightbox</span>
                      </button>
                    )}

                    <div className="flex flex-1 flex-col">
                      <h3 className="text-2xl font-semibold text-white mb-3">{card.title}</h3>
                      <p className="text-white/70 text-base leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setLightbox(null)}
          role="presentation"
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl border border-white/20 bg-black/60 p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full w-full" style={{ minHeight: '300px' }}>
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
              className="absolute top-4 right-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
