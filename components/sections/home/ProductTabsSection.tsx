"use client";

import type { ComponentType } from "react";
import { useState, useCallback, KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/**
 * Represents a single feature with an icon and title
 * @property {ComponentType} icon - Lucide React icon component
 * @property {string} title - Feature display name
 */
type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
};

/**
 * Defines a product tab with its content and features
 * @property {string} id - Unique identifier for the tab
 * @property {string} label - Tab button text
 * @property {string} screenTitle - Title shown in the content area
 * @property {string} screenDescription - Detailed description of the product
 * @property {string | null} screenImageSrc - Path to product screenshot
 * @property {Feature[]} features - Array of key features for this product
 */
type ProductTab = {
  id: string;
  label: string;
  screenTitle: string;
  screenDescription?: string;
  screenImageSrc?: string | null;
  features: Feature[];
};

/**
 * Array of product tabs with their complete content
 * Each tab represents a different aspect of the platform
 */
const TABS: ProductTab[] = [
  {
    id: "dev-studio",
    label: "Dev Studio",
    screenTitle: "Visual Dev Studio",
    screenDescription:
      "A complete visual environment to build workflows, UI screens, business rules, decision tables, and data models. Everything needed to design an enterprise application, all drag-and-drop.",
    screenImageSrc: "/images/products/dev-studio.jpg",
    features: [
      {
        icon: Workflow,
        title: "Visual Workflow Builder",
      },
      {
        icon: LayoutDashboard,
        title: "UI Screen Designer",
      },
      {
        icon: BrainCircuit,
        title: "Business Rules & Decision Tables",
      },
      {
        icon: Cpu,
        title: "Data Modeling",
      },
      {
        icon: LineChart,
        title: "Integrations",
      },
      {
        icon: Zap,
        title: "Instant Deployment",
      },
    ],
  },
  {
    id: "agentic-hub",
    label: "Agentic AI Hub",
    screenTitle: "Agentic AI Hub",
    screenDescription:
      "Create, configure, and embed AI agents directly into your flows for interpretation, validation, predictions, decision-making, and automated actions.",
    screenImageSrc: "/images/products/agentic-hub.jpg",
    features: [
      {
        icon: BrainCircuit,
        title: "Create & Configure AI Agents",
      },
      {
        icon: Workflow,
        title: "Embed Agents into Flows",
      },
      {
        icon: LineChart,
        title: "Model-Based Predictions",
      },
      {
        icon: ShieldCheck,
        title: "Validation & Automated Actions",
      },
      {
        icon: Zap,
        title: "Parallel & Event-Driven Execution",
      },
      {
        icon: Sparkles,
        title: "True No-Code AI Orchestration",
      },
    ],
  },
];

/**
 * ProductTabsSection Component - Interactive tabbed product showcase
 * 
 * Displays platform capabilities through an interactive tab interface.
 * 
 * Features:
 * - Tab navigation with keyboard support (Arrow keys)
 * - Smooth animations between tab changes using Framer Motion
 * - Active tab indication with animated background
 * - Responsive grid of feature badges
 * - Click-to-zoom image lightbox
 * - Accessible with ARIA attributes
 * 
 * Tab Structure:
 * - Each tab represents a product/feature area
 * - Active tab highlighted with white background
 * - Content area shows description, features, and screenshot
 * 
 * Keyboard Navigation:
 * - Arrow Left/Right: Switch between tabs
 * - Tab key: Navigate through interactive elements
 * - Focus visible ring for accessibility
 * 
 * State Management:
 * - activeTabId: Currently selected tab
 * - lightboxImage: Controls image zoom modal
 */
export default function ProductTabsSection() {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const activeTab = TABS.find((tab) => tab.id === activeTabId) ?? TABS[0];

  /**
   * Handles tab selection change
   * @param {string} nextId - ID of the tab to activate
   */
  const handleSelect = useCallback((nextId: string) => {
    setActiveTabId(nextId);
  }, []);

  /**
   * Handles keyboard navigation between tabs
   * @param {KeyboardEvent<HTMLButtonElement>} event - Keyboard event
   * @param {number} currentIndex - Index of the currently focused tab
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
        return;
      }

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + TABS.length) % TABS.length;
      setActiveTabId(TABS[nextIndex].id);
    },
    []
  );

  return (
    <section className="w-full bg-[#05070d] py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-[40px] font-medium text-white mb-6">
            Meet the Stackyon Platform
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div role="tablist" aria-label="Product capability tabs" className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {TABS.map((tab, index) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleSelect(tab.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`relative inline-flex items-center justify-center rounded-full border px-10 py-3.5 text-lg font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      isActive
                        ? "border-white bg-white text-black shadow-[0_18px_45px_-28px_rgba(94,234,212,0.65)]"
                        : "border-white/20 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-xl font-semibold">{tab.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="tab-indicator"
                        className="absolute inset-0 -z-10 rounded-full border border-transparent"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex w-full flex-col gap-10"
          >
            {activeTab.screenDescription && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.04 }}
                className="mx-auto max-w-3xl text-center text-base text-white/70"
              >
                {activeTab.screenDescription}
              </motion.p>
            )}

            <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">
              <div className="relative w-full lg:basis-[70%] lg:max-w-[70%]">
                {activeTab.screenImageSrc ? (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({ src: activeTab.screenImageSrc!, alt: activeTab.screenTitle })
                      }
                      className="group relative flex max-h-[520px] w-full max-w-[760px] items-center justify-center rounded-[32px] border border-sky-400/50 bg-[#04070f] p-3 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                      style={{
                        boxShadow:
                          '0 0 0 1px rgba(139,92,246,0.35), 0 0 22px rgba(139,92,246,0.35), 0 0 44px rgba(56,189,248,0.3), 0 0 65px rgba(6,182,212,0.25)',
                      }}
                    >
                      <span className="pointer-events-none absolute inset-[6px] rounded-[26px] border border-sky-300/35" aria-hidden="true" />
                      <span className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-400/0 via-sky-400/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" aria-hidden="true" />
                      <Image
                        src={activeTab.screenImageSrc}
                        alt={activeTab.screenTitle}
                        width={960}
                        height={600}
                        className="relative z-10 h-full w-auto rounded-[12px] object-contain"
                        priority={false}
                      />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 bg-gradient-to-br from-slate-900 via-slate-900 to-black px-10 py-12">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                        <Sparkles className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                        Stackyon Platform
                      </p>
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {activeTab.screenTitle}
                    </h3>
                    <div className="mt-6 grid gap-4 rounded-2xl border border-white/5 bg-black/60 p-6 backdrop-blur">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 rounded-full bg-white/10" />
                        <div className="h-2 rounded-full bg-sky-500/50" />
                        <div className="h-2 rounded-full bg-white/10" />
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4" />
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4" />
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4" />
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                className="w-full lg:basis-[30%] lg:max-w-[30%]"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950/80 to-black shadow-[0_35px_120px_-60px_rgba(56,189,248,0.45)]">
                  <div className="relative z-10 flex max-h-[412px] flex-col gap-4 overflow-y-auto px-6 py-8 pr-3 [scrollbar-width:thin] [scrollbar-color:rgba(56,189,248,0.45)_transparent]">
                    {activeTab.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={feature.title}
                          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_55px_-45px_rgba(56,189,248,0.55)] backdrop-blur transition hover:border-sky-400/60 hover:bg-white/10"
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setLightboxImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black/70 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setLightboxImage(null);
              }}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              Close
            </button>
            <div
              className="relative mx-auto w-full"
              style={{ width: "min(92vw, 1200px)", height: "min(80vh, 720px)" }}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
