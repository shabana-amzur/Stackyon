'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

/**
 * Solutions navigation links displayed in the footer
 * Contains links to various automation and integration solutions
 */
const solutionsLinks = [
  { label: 'Process Automation', href: '/solutions/process-automation' },
  { label: 'Workflow Builders', href: '/solutions/workflow-builders' },
  { label: 'Application Integration', href: '/solutions/application-integration' },
  { label: 'Application Development', href: '/solutions/application-development' },
  { label: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
  { label: 'Application Rationalization', href: '/solutions/application-rationalization' },
];

/**
 * Company information links in the footer
 */
const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'StackPort', href: '/ecosystem/stackport' },
  { label: 'Contact us', href: '/about/contact' },
];

/**
 * Platform features and capabilities links
 * Comprehensive list of all platform capabilities
 */
const platformLinks = [
  { label: 'Gen AI', href: '/platform/gen-ai-copilot' },
  { label: 'Intelligent UI', href: '/platform/intelligent-ui' },
  { label: 'Architecture', href: '/platform/architecture' },
  { label: 'APIs and Integration', href: '/platform/apis-integration' },
  { label: 'Business Logic', href: '/platform/business-logic' },
  { label: 'Configuration Management', href: '/platform/configuration-management' },
  { label: 'Data Management', href: '/platform/data-management' },
  { label: 'Deployment', href: '/platform/deployment' },
  { label: 'Reporting & Analytics', href: '/platform/reporting-analytics' },
  { label: 'Security', href: '/platform/security' },
  { label: 'Workflow Orchestration', href: '/platform/workflow-orchestration' },
  { label: 'User Experience', href: '/platform/user-experience' },
];

/**
 * Contact information including email and physical addresses
 * Each item includes an icon, label, and optional href for clickable items
 */
const contactDetails = [
  {
    label: 'info@stackyon.com',
    href: 'mailto:info@stackyon.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.25 4.5H3.75A1.75 1.75 0 0 0 2 6.25v11.5A1.75 1.75 0 0 0 3.75 19.5h16.5A1.75 1.75 0 0 0 22 17.75V6.25A1.75 1.75 0 0 0 20.25 4.5Zm-.35 1.5-7.4 5.33a1 1 0 0 1-1.01 0L4.09 6h15.81ZM3.5 17.5V7.29l8.02 5.78a2.5 2.5 0 0 0 2.96 0L22 7.29V17.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25Z"
        />
      </svg>
    ),
  },
  {
    label: '2807 W Busch Blvd, Suite 110, Tampa, FL 33618',
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2a6.75 6.75 0 0 0-6.75 6.75c0 4.99 6.32 12.46 6.6 12.78a.2.2 0 0 0 .3 0c.28-.32 6.6-7.79 6.6-12.78A6.75 6.75 0 0 0 12 2Zm0 9.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        />
      </svg>
    ),
  },
  {
    label: 'Tech Mahindra IT Park, 4th Floor, ODC1, Tech Hub, Resapuvanipalem, Visakhapatnam, AP, India',
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2a6.75 6.75 0 0 0-6.75 6.75c0 4.99 6.32 12.46 6.6 12.78a.2.2 0 0 0 .3 0c.28-.32 6.6-7.79 6.6-12.78A6.75 6.75 0 0 0 12 2Zm0 9.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M14.5 8.5V6.75c0-.69.56-1.25 1.25-1.25H17V3h-2.5A3.5 3.5 0 0 0 11 6.5V8.5H9v2.5h2v10h3v-10h2.17l.33-2.5H14.5Z"
        />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.36 3H21l-6.52 7.46L21 21h-5.64l-3.9-5.36L7 21H3.36l6.89-7.88L3 3h5.66l3.49 4.84L18.36 3Z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stackyon',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M5 3a2 2 0 1 1 .01 3.999A2 2 0 0 1 5 3Zm-2 6h4v12H3V9Zm6 0h3.8v1.64h.09c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.77 2.47 4.77 5.68V21h-4v-5.22c0-1.24-.02-2.85-1.74-2.85-1.74 0-2.01 1.35-2.01 2.75V21h-4V9Z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.75C18 5 12 5 12 5s-6 0-7.84.45A2.5 2.5 0 0 0 2.4 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.75C6 19 12 19 12 19s6 0 7.84-.45a2.5 2.5 0 0 0 1.76-1.75A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="
      absolute inset-x-0 bottom-0 z-0 h-[260px]
      bg-[url('/images/backgrounds/footer-bottom-bg.jpg')] bg-cover bg-bottom
      opacity-80
      [mask-image:linear-gradient(to_top,transparent,black_35%,black)]
      [-webkit-mask-image:linear-gradient(to_top,transparent,black_35%,black)]
    "
        />
        <div className="absolute bottom-[26px] left-1/2 z-10 -translate-x-1/2 text-[13.5rem] font-black uppercase tracking-[0.85rem] text-white/[0.035]">
          Stackyon
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-[50px] pb-[130px] lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.8fr)_repeat(2,minmax(0,1fr))]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/logos/stackyon-logo-white.png" alt="Stackyon" width={80} height={80} className="h-14 w-auto" />
            </div>
            <div className="space-y-3 text-sm text-white/80">
              {contactDetails.map((item) => {
                const content = item.href ? (
                  <a href={item.href} className="leading-relaxed text-white transition hover:text-white/60">
                    {item.label}
                  </a>
                ) : (
                  <span className="leading-relaxed">{item.label}</span>
                );

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/40 via-indigo-500/30 to-purple-500/40 text-white">
                      {item.icon}
                    </span>
                    <div className="flex-1 leading-relaxed">{content}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-white/80 transition hover:border-white/30 hover:text-white"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2rem] text-white/50">Solutions</h3>
              <ul className="space-y-3 text-base text-white/70">
                {solutionsLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2rem] text-white/50">Company</h3>
              <ul className="space-y-3 text-base text-white/70">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2rem] text-white/50">Platform</h3>
            <ul className="space-y-3 text-base text-white/70">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="relative z-10 mt-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/60 md:flex-row lg:px-8">
          <p>Stackyon, {currentYear} © All rights reserved</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/90 text-black">
              <ArrowUpIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
