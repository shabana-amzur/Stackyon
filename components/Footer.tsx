import Link from "next/link";

const footerNav = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Gen AI Copilot", href: "/platform/gen-ai-copilot" },
      { label: "Intelligent UI", href: "/platform/intelligent-ui" },
      { label: "Architecture", href: "/platform/architecture" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Process Automation", href: "/solutions/process-automation" },
      { label: "Workflow Builders", href: "/solutions/workflow-builders" },
      { label: "Integration", href: "/solutions/application-integration" },
      { label: "Legacy Modernization", href: "/solutions/legacy-modernization" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/company" },
      { label: "Contact", href: "/about/contact" },
      { label: "Success Ecosystem", href: "/ecosystem/consulting" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 py-12 text-sm">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4 text-white/70">
          <div className="flex items-center gap-2.5">
            <img
              src="/stackyon-logo-white.png"
              alt="Stackyon Logo"
              className="h-10 w-auto"
            />
          </div>
          <p>
            Stackyon delivers an end-to-end low-code platform for orchestrating
            complex enterprise operations with AI assistance built in.
          </p>
          <div className="space-y-1">
            <p>contact@stackyon.com</p>
            <p>+1 (800) 555-8294</p>
          </div>
        </div>
        <div className="grid flex-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {section.title}
              </h3>
              <ul className="space-y-2 text-white/80">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[80rem] border-t border-white/5 px-4 pt-6 text-xs text-white/50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Stackyon. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/resources" className="transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
