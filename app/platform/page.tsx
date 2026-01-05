import CTASection from "@/components/CTASection";
import {
  Workflow,
  LayoutDashboard,
  Settings2,
  Database,
  Plug,
  AppWindow,
  Share2,
  Table,
  FileText,
  Lightbulb,
  UserX,
  Users,
  CheckCircle,
  ShieldCheck,
  Zap,
  Target,
  TrendingDown,
} from "lucide-react";

const devStudioDefineCards = [
  {
    title: "workflows and process flows",
    icon: Workflow,
  },
  {
    title: "UI layouts and user journeys",
    icon: LayoutDashboard,
  },
  {
    title: "business rules and decision tables",
    icon: Settings2,
  },
  {
    title: "data structures and relationships",
    icon: Database,
  },
  {
    title: "integrations and connections",
    icon: Plug,
  },
];

const devStudioIdealCards = [
  {
    title: "building new digital applications",
    icon: AppWindow,
  },
  {
    title: "extending existing systems",
    icon: Share2,
  },
  {
    title: "replacing fragile spreadsheets, custom scripts, or shadow IT",
    icon: Table,
  },
  {
    title: "experimenting, iterating, refining without disruption",
    icon: Settings2,
  },
];

const agenticConfigPoints = [
  { label: "Interpret documents & data", icon: FileText },
  { label: "Make recommendations", icon: Lightbulb },
  { label: "Trigger workflows", icon: Workflow },
  { label: "Reduce manual reviews", icon: UserX },
  { label: "Human collaboration", icon: Users },
];

const agenticOutcomePoints = [
  { label: "Smarter approvals", icon: CheckCircle },
  { label: "Automated validations", icon: ShieldCheck },
  { label: "Predictive actions", icon: Zap },
  { label: "Consistent decisions", icon: Target },
  { label: "Lower effort", icon: TrendingDown },
];

const platformModules = [
  {
    title: "Agentic AI Builder",
    intro: "Intelligence that lives inside the process, not bolted on. Agentic AI Builder lets organizations introduce AI safely and intentionally.",
    sections: [
      {
        heading: "You can configure agents to:",
        items: [
          "interpret documents, data, and inputs",
          "make recommendations or decisions",
          "trigger workflows based on conditions",
          "reduce manual reviews and human intervention",
          "collaborate with human users where needed",
        ],
      },
      {
        heading: "This unlocks:",
        items: [
          "smarter approvals",
          "automated validations",
          "predictive actions",
          "consistent decision-making",
          "lower operational effort",
        ],
      },
    ],
    closing: "Agents don’t replace the workflow; they become part of how the workflow operates.",
    cta: {
      label: "Learn more about Agentic AI Builder",
      href: "/agentic-ai-builder",
    },
  },
];

const architecturalPillars = [
  {
    name: "Experience",
    points: [
      "Composable UI libraries with responsive defaults",
      "Personalized journeys driven by contextual data",
      "Omnichannel orchestration spanning web, mobile, and chat",
    ],
  },
  {
    name: "Intelligence",
    points: [
      "Real-time decisioning with reusable rule packs",
      "Gen AI copilots that learn from domain blueprints",
      "Predictive insights surfaced directly in user flows",
    ],
  },
  {
    name: "Automation",
    points: [
      "Workflow engine with BPMN and event-driven triggers",
      "Hundreds of prebuilt connectors with secure credential vaulting",
      "Scalable microservices runtime with autoscaling profiles",
    ],
  },
  {
    name: "Data",
    points: [
      "Universal data model that federates across systems",
      "Lineage tracking with role-based visibility",
      "Stream ingestion with built-in transformations and quality rules",
    ],
  },
];

export default function PlatformPage() {
  return (
    <div className="bg-black">
      <section className="relative isolate overflow-hidden bg-[#04050a] py-28 text-white md:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.55)_0%,_rgba(4,5,10,0.15)_55%,_rgba(4,5,10,0.95)_90%)]" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(148,163,255,0.15)_0%,_rgba(4,7,13,0.9)_65%)] opacity-90 mix-blend-screen" aria-hidden="true" />
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.4)_0,rgba(3,5,10,0)_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.3)_0,rgba(3,5,10,0)_40%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.35)_0,rgba(3,5,10,0)_35%)] opacity-70" aria-hidden="true" />
        <div className="absolute inset-0 -z-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:3px_3px] opacity-40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
          <div className="space-y-6">
            <h1 className="text-[55px] font-semibold leading-[1.1]">An AI-Native Platform for Intelligent Business Applications</h1>
            <p className="text-lg text-white/80">
              Design processes, automate decisions, and ship applications in one unified studio.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a href="/dev-studio" className="group relative inline-flex">
              <span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-xl transition-opacity group-hover:opacity-80"
                aria-hidden="true"
              />
              <span className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/10">
                Explore Dev Studio
              </span>
            </a>
            <a
              href="/agentic-ai-builder"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Explore Agentic AI Builder
            </a>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#faf5ff] via-white to-[#f4f3ff] py-28 text-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(125,86,255,0.1)_0%,transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f1eaff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6c3ddb]">
              Agentic AI Builder
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Intelligence that lives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b21b6] to-[#9333ea]">inside the process</span>
            </h2>
            <p className="text-lg text-slate-500">
              Not bolted on. Let organizations introduce AI safely and intentionally. Agents become part of how the workflow operates.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            <div className="rounded-[32px] border border-[#e3d7ff] bg-white/60 p-8 shadow-[0_45px_120px_-60px_rgba(91,33,182,0.25)]">
              <h3 className="text-xl font-semibold text-slate-900">Configure agents to</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                {agenticConfigPoints.map((point) => (
                  <li key={point.label} className="flex items-center gap-3 rounded-2xl bg-[#f5f1ff] px-4 py-3 text-sm font-medium text-slate-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#c084fc] text-white">
                      <point.icon className="h-4 w-4" />
                    </span>
                    {point.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-[#d8c9ff] bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a855f7] p-8 text-white shadow-[0_60px_180px_-70px_rgba(91,33,182,0.45)]">
              <h3 className="text-xl font-semibold">This unlocks</h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {agenticOutcomePoints.map((point) => (
                  <div key={point.label} className="rounded-2xl bg-white/15 p-4 text-sm font-medium text-white/90">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
                        <point.icon className="h-5 w-5" />
                      </span>
                      <span>{point.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/agentic-ai-builder"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5b21b6] shadow-[0_12px_30px_-18px_rgba(255,255,255,0.55)] transition hover:shadow-[0_16px_40px_-18px_rgba(255,255,255,0.65)]"
              >
                Learn more about Agentic AI
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#05070d] py-24 text-white">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_rgba(5,7,13,0)_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.28)_0%,_rgba(5,7,13,0)_70%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:3px_3px] opacity-30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">Dev Studio</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Dev Studio is the all-in-one workspace where product, design, and engineering teams collaborate to build applications. Configure processes, interfaces, logic, and data in real time while keeping everything versioned and deployment ready.
            </p>
            <a href="/dev-studio" className="group relative inline-flex">
              <span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-xl transition-opacity group-hover:opacity-80"
                aria-hidden="true"
              />
              <span className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10">
                Visit Dev Studio
              </span>
            </a>
          </div>

          <div className="mt-16 space-y-14">
            <div>
              <h3 className="text-2xl font-semibold text-white">Teams can define:</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {devStudioDefineCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/25 to-purple-500/25 text-white">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h4 className="text-base font-semibold text-white capitalize">{card.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">Dev Studio is ideal for:</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {devStudioIdealCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/25 to-purple-500/25 text-white">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h4 className="text-base font-semibold text-white capitalize">{card.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
