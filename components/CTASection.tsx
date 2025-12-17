'use client';

import { CalendarDaysIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gray-800" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-800" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center text-white">
        <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl md:leading-tight">
          See Stackyon in action.
          <br className="hidden md:block" />
          Build smarter, modernize faster,
          <br className="hidden md:block" />
          automate intelligently
        </h2>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <a
            href="/demo"
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-[#0d101b] px-8 py-3 text-base font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition hover:-translate-y-0.5 hover:border-sky-400/60 hover:shadow-[0_0_55px_rgba(99,102,241,0.55)]"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 opacity-60 blur-xl" aria-hidden="true" />
            <CalendarDaysIcon className="h-5 w-5" />
            Book a Demo
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/80 transition hover:border-white/20 hover:text-white"
          >
            Connect with Us
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
