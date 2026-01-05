import CTASection from "@/components/CTASection";

const defineCards = [
  { title: "Workflows", description: "Map processes visually with reusable steps." },
  { title: "Interfaces", description: "Compose responsive layouts for every persona." },
  { title: "Rules", description: "Manage decision logic and condition sets." },
  { title: "Data Models", description: "Design entities, relationships, and validations." },
  { title: "Integrations", description: "Connect services with secure credentials." },
];

const idealCards = [
  { title: "New Applications", description: "Launch greenfield digital products faster." },
  { title: "System Extensions", description: "Augment legacy platforms with modern UX." },
  { title: "Operational Efficiency", description: "Replace spreadsheets and manual scripts." },
  { title: "Rapid Iteration", description: "Prototype, test, and refine without downtime." },
];

export default function DevStudioPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative border-b border-slate-200 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center">
          <div className="w-full lg:w-2/5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">Dev Studio</h1>
          </div>
          <div className="w-full lg:w-3/5">
            <p className="text-lg leading-relaxed text-slate-600">
              Dev Studio is a visual workspace where cross-functional teams design applications together. From workflow automation to user experiences and system integrations, it keeps every artifact connected, traceable, and ready for deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-semibold text-slate-900">Teams can define:</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {defineCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_36px_-18px_rgba(15,23,42,0.25)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400">
                  •
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-semibold text-slate-900">Dev Studio is ideal for:</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {idealCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_36px_-18px_rgba(15,23,42,0.25)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400">
                  •
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-950">
        <CTASection />
      </div>
    </div>
  );
}
