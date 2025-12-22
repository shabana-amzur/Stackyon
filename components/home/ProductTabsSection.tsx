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

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
};

type ProductTab = {
  id: string;
  label: string;
  screenTitle: string;
  screenDescription?: string;
  screenImageSrc?: string | null;
  features: Feature[];
};

const TABS: ProductTab[] = [
  {
    id: "dev-studio",
    label: "Dev Studio",
    screenTitle: "Visual Dev Studio",
    screenDescription:
      "A complete visual environment to build workflows, UI screens, business rules, decision tables, and data models. Everything needed to design an enterprise application, all drag-and-drop.",
    screenImageSrc: "/agentic-configuration.jpg",
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
    label: "Agentic Hub",
    screenTitle: "Agentic AI Builder",
    screenDescription:
      "Create, configure, and embed AI agents directly into your flows for interpretation, validation, predictions, decision-making, and automated actions.",
    screenImageSrc: "/agentic-configuration.jpg",
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

export default function ProductTabsSection() {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);
  const activeTab = TABS.find((tab) => tab.id === activeTabId) ?? TABS[0];

  const handleSelect = useCallback((nextId: string) => {
    setActiveTabId(nextId);
  }, []);

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
    <section className="w-full bg-black py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
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
            className="flex flex-col items-center gap-10"
          >
            {activeTab.screenDescription && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.04 }}
                className="max-w-3xl text-center text-base text-white/70"
              >
                {activeTab.screenDescription}
              </motion.p>
            )}

            <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-black shadow-[0_35px_120px_-50px_rgba(56,189,248,0.45)]">
              {activeTab.screenImageSrc ? (
                <Image
                  src={activeTab.screenImageSrc}
                  alt={activeTab.screenTitle}
                  width={700}
                  height={438}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
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
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
              className="flex w-full flex-wrap justify-center gap-6"
            >
              {activeTab.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="w-full max-w-[260px] rounded-2xl border border-white/10 bg-zinc-900/70 p-6 text-center shadow-[0_30px_80px_-60px_rgba(56,189,248,0.55)] backdrop-blur transition hover:border-sky-500/50 hover:shadow-[0_35px_110px_-55px_rgba(56,189,248,0.65)] sm:w-[calc(50%_-_24px)] lg:w-[calc(33.333%_-_24px)] xl:w-[calc(25%_-_24px)]"
                  >
                    <Icon className="mx-auto mb-3 h-7 w-7 text-sky-300" />
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
