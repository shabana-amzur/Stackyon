"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Workflow,
  Cable,
  ShieldCheck,
  Bot,
  Sparkles,
  CircuitBoard,
  PieChart,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type TabConfig = {
  id: string;
  label: string;
  screenTitle: string;
  screenDescription: string;
  screenImageSrc: string;
  features: Feature[];
};

const gradientPlaceholder =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%231e3a8a'/><stop offset='100%25' stop-color='%230f172a'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><rect x='80' y='96' width='640' height='72' rx='16' fill='rgba(255,255,255,0.12)'/><rect x='80' y='188' width='420' height='48' rx='12' fill='rgba(148,163,184,0.35)'/><rect x='80' y='252' width='640' height='268' rx='24' fill='rgba(15,23,42,0.65)' stroke='rgba(148,163,184,0.35)' stroke-width='2'/></svg>";

const tabs: TabConfig[] = [
  {
    id: "dev-studio",
    label: "Dev Studio",
    screenTitle: "Stackyon Dev Studio",
    screenDescription:
      "Design enterprise apps visually, wire data sources, and publish in minutes.",
    screenImageSrc: gradientPlaceholder,
    features: [
      {
        icon: LayoutDashboard,
        title: "Visual Builder",
        description: "Drag UI blocks and data bindings into responsive layouts.",
      },
      {
        icon: Workflow,
        title: "Flow Automation",
        description: "Model complex processes with reusable workflow blueprints.",
      },
      {
        icon: Cable,
        title: "Instant Integrations",
        description: "Connect REST, GraphQL, and legacy APIs with schema mapping.",
      },
      {
        icon: ShieldCheck,
        title: "Governance",
        description: "Role-based reviews keep every release compliant and secure.",
      },
    ],
  },
  {
    id: "agentic-hub",
    label: "Agentic Hub",
    screenTitle: "Agentic Operations",
    screenDescription:
      "Deploy orchestrated AI agents that collaborate with Stackyon services.",
    screenImageSrc: gradientPlaceholder,
    features: [
      {
        icon: Bot,
        title: "Autonomous Agents",
        description: "Spin up task-specific agents with guardrails and observability.",
      },
      {
        icon: Sparkles,
        title: "Prompt Studio",
        description: "Version prompts, evaluate outputs, and promote best variants.",
      },
      {
        icon: CircuitBoard,
        title: "Orchestration",
        description: "Chain agents with human-in-the-loop checkpoints and SLAs.",
      },
      {
        icon: PieChart,
        title: "Analytics",
        description: "Monitor agent performance with real-time impact dashboards.",
      },
    ],
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const tabTransition = {
  type: "spring",
  stiffness: 340,
  damping: 28,
};

function ProductTabsSection() {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const lastIndex = tabs.length - 1;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      const nextTab = tabs[nextIndex];
      setActiveTabId(nextTab.id);
      document.getElementById(`${nextTab.id}-tab`)?.focus();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      const prevTab = tabs[prevIndex];
      setActiveTabId(prevTab.id);
      document.getElementById(`${prevTab.id}-tab`)?.focus();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTabId(tabs[currentIndex].id);
    }
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  return (
    <section className="w-full bg-black py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex w-full justify-center lg:justify-start">
            <div
              role="tablist"
              aria-label="Stackyon product modes"
              className="flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur"
            >
              {tabs.map((tab, index) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    id={`${tab.id}-tab`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${tab.id}-panel`}
                    onClick={() => setActiveTabId(tab.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="relative whitespace-nowrap px-6 py-2 text-sm font-medium text-slate-200 outline-none transition-colors focus-visible:text-white md:text-base"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tabIndicator"
                        className="absolute inset-0 rounded-full bg-white/15"
                        transition={tabTransition}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab.id}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="tabpanel"
              id={`${activeTab.id}-panel`}
              aria-labelledby={`${activeTab.id}-tab`}
              tabIndex={0}
              className="space-y-12"
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.9)]">
                <div className="absolute inset-0">
                  <Image
                    src={activeTab.screenImageSrc}
                    alt={`${activeTab.label} interface mock`}
                    fill
                    sizes="(min-width: 1280px) 1024px, (min-width: 768px) 80vw, 100vw"
                    className="object-cover opacity-50"
                    priority
                  />
                </div>
                <div className="relative z-10 h-full w-full bg-gradient-to-br from-white/5 via-transparent to-black/30">
                  <div className="flex h-full flex-col justify-between p-8 sm:p-12">
                    <div className="space-y-4">
                      <motion.h3
                        layout
                        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                      >
                        {activeTab.screenTitle}
                      </motion.h3>
                      <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                        {activeTab.screenDescription}
                      </p>
                    </div>
                    <div className="mt-8 grid gap-3 text-xs text-slate-200 sm:grid-cols-3 sm:text-sm">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="h-3 w-12 rounded-full bg-emerald-400/80" />
                        <div className="mt-3 h-2 w-32 rounded-full bg-slate-400/60" />
                        <div className="mt-2 h-2 w-24 rounded-full bg-slate-500/50" />
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-cyan-400/70" />
                          <div className="h-2 w-24 rounded-full bg-slate-400/70" />
                        </div>
                        <div className="mt-3 h-2 w-20 rounded-full bg-slate-500/50" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-slate-500/40" />
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-indigo-500/40" />
                        <div className="mt-3 h-2 w-20 rounded-full bg-slate-400/60" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-slate-500/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {activeTab.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      layout
                      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-white/20"
                    >
                      <div className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 p-2 text-cyan-300">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProductTabsSection;
