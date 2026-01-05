'use client';

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type MegaMenuItem = {
  name?: string;
  title?: string;
  description?: string;
  href: string;
};

const navigation = {
  solutions: {
    name: 'Solutions',
    description: 'Modernize complex operations with intelligent automation, integrations, and AI copilots.',
    hasDropdown: true,
    items: [
      { name: 'Process Automation', href: '/solutions/process-automation' },
      { name: 'Workflow Builders', href: '/solutions/workflow-builders' },
      { name: 'Application Integration', href: '/solutions/application-integration' },
      { name: 'Application Development', href: '/solutions/application-development' },
      { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
      { name: 'Application Rationalization', href: '/solutions/application-rationalization' },
    ],
  },
  platform: {
    name: 'Platform',
    description: 'The unified Stackyon low-code platform that connects data, logic, and automation end-to-end.',
    hasDropdown: true,
    href: '/platform',
    items: [
      { name: 'Overview', description: 'Discover the Stackyon platform in one view', href: '/platform' },
      { title: 'Gen AI', name: 'Gen AI', description: 'Copilot for App Creation', href: '/platform/gen-ai-copilot' },
      { title: 'Intelligent UI', name: 'Intelligent UI', href: '/platform/intelligent-ui' },
      { title: 'Architecture', name: 'Architecture', description: 'Flexible Enterprise Architecture', href: '/platform/architecture' },
      { title: 'APIs and Integration', name: 'APIs and Integration', description: 'Build & Integrate', href: '/platform/apis-integration' },
      { title: 'Business Logic', name: 'Business Logic', description: 'Centralized Rules', href: '/platform/business-logic' },
      { title: 'Configuration Management', name: 'Configuration Management', href: '/platform/configuration-management' },
      { title: 'Data Management', name: 'Data Management', description: 'Connect & Model Data', href: '/platform/data-management' },
      { title: 'Deployment', name: 'Deployment', description: 'Cloud-Native Options', href: '/platform/deployment' },
      { title: 'Reporting & Analytics', name: 'Reporting & Analytics', description: 'Deep Insights', href: '/platform/reporting-analytics' },
      { title: 'Security', name: 'Security', description: 'Build Secure Applications', href: '/platform/security' },
      { title: 'Workflow Orchestration', name: 'Workflow Orchestration', description: 'Automated Tools', href: '/platform/workflow-orchestration' },
      { title: 'User Experience', name: 'User Experience', description: 'Customer Experience Automation', href: '/platform/user-experience' },
    ],
  },
  caseStudies: {
    name: 'Case Studies',
    href: '/case-studies',
  },
  blog: {
    name: 'Blog',
    href: '/blog',
  },
  resources: {
    name: 'FAQ',
    href: '/resources',
  },
  about: {
    name: 'About',
    description: 'Meet the Stackyon team and get in touch with our enterprise transformation experts.',
    hasDropdown: true,
    items: [
      { name: 'StackPort — Partner Program', href: '/ecosystem/stackport' },
      { name: 'Our Company', href: '/about/company' },
      { name: 'Contact Us', href: '/about/contact' },
    ],
  },
  ecosystem: {
    name: 'Success Ecosystem',
    description: 'Tap into partner expertise, enablement programs, and dedicated success teams.',
    hasDropdown: true,
    items: [
      { name: 'Consulting Services', href: '/ecosystem/consulting' },
      { name: 'Development Services', href: '/ecosystem/development' },
      { name: 'Integration Services', href: '/ecosystem/integration' },
      { name: 'Optimization Services', href: '/ecosystem/optimization' },
      { name: 'QA & Testing Support', href: '/ecosystem/qa-testing' },
      { name: 'Training & Knowledge', href: '/ecosystem/training' },
      { name: 'Technical Support', href: '/ecosystem/technical-support' },
    ],
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chunkItems = (items: MegaMenuItem[], chunkSize = 4) => {
    const result: MegaMenuItem[][] = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      result.push(items.slice(i, i + chunkSize));
    }
    return result;
  };

  const getGridColsClass = (count: number) => {
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-3';
    return 'grid-cols-4';
  };

  const getMenuWidthClass = (count: number) => {
    if (count <= 1) return 'w-[360px]';
    if (count === 2) return 'w-[640px]';
    if (count === 3) return 'w-[860px]';
    return 'w-[1040px]';
  };

  const renderMegaMenu = (
    section: {
      name: string;
      items: MegaMenuItem[];
    },
    position: 'left' | 'right' = 'left'
  ) => {
    const columns = chunkItems(section.items);
    const columnCount = columns.length;
    const widthClass = getMenuWidthClass(columnCount);
    const gridColsClass = getGridColsClass(columnCount);
    const alignmentClass = position === 'right' ? 'right-0' : 'left-0';
    const originClass = position === 'right' ? 'origin-top-right' : 'origin-top-left';

    return (
      <Menu.Items
        className={`absolute ${alignmentClass} mt-3 ${widthClass} ${originClass} rounded-3xl bg-white border border-black/5 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] focus:outline-none`}
      >
        <div className="p-6 lg:p-8">
          <div className={`grid gap-4 lg:gap-6 ${gridColsClass}`}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((item) => (
                  <Menu.Item key={(item.name ?? item.title) ?? item.href}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={`flex items-start rounded-xl border px-4 py-3 text-base transition-all ${
                          active
                            ? 'border-blue-500/40 bg-blue-50 text-gray-900 shadow-[0_15px_30px_-20px_rgba(30,64,175,0.45)]'
                            : 'border-gray-100 bg-white text-gray-800 hover:border-blue-500/40 hover:bg-blue-50/40 hover:text-gray-900 hover:shadow-[0_12px_24px_-18px_rgba(15,23,42,0.35)]'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="text-base font-semibold text-gray-900">
                            {item.title ?? item.name}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Menu.Items>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm py-[20px] font-[family-name:var(--font-roboto)] border-b border-white/10">
      <div className="max-w-[80rem] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <img
            src="/stackyon-logo-white.png"
            alt="Stackyon Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 ml-16">
          {/* Solutions Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
              {navigation.solutions.name}
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {renderMegaMenu(navigation.solutions)}
            </Transition>
          </Menu>

          {/* Platform Dropdown */}
          <Menu as="div" className="relative">
            <div className="flex items-center gap-1">
              <a
                href={navigation.platform.href}
                className="text-white/90 transition-colors hover:text-white"
              >
                {navigation.platform.name}
              </a>
              <Menu.Button
                className="flex items-center p-1 text-white/70 transition-colors hover:text-white"
                aria-label="Open Platform menu"
              >
                <ChevronDownIcon className="h-4 w-4" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {renderMegaMenu(navigation.platform)}
            </Transition>
          </Menu>

          {/* Case Studies */}
          <a href={navigation.caseStudies.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.caseStudies.name}
          </a>

          {/* Blog */}
          <a href={navigation.blog.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.blog.name}
          </a>

          {/* Resources */}
          <a href={navigation.resources.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.resources.name}
          </a>

          {/* About Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
              {navigation.about.name}
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {renderMegaMenu(navigation.about)}
            </Transition>
          </Menu>

          {/* Success Ecosystem Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
              {navigation.ecosystem.name}
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {renderMegaMenu(navigation.ecosystem, 'right')}
            </Transition>
          </Menu>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm hover:opacity-90 transition-opacity">
            Book a Demo
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-[80rem] mx-auto px-4 py-4 space-y-3">
            {/* Solutions */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.solutions.name}
              </div>
              {navigation.solutions.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Platform */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.platform.name}
              </div>
              {navigation.platform.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Case Studies */}
            <a
              href={navigation.caseStudies.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.caseStudies.name}
            </a>

            {/* Blog */}
            <a
              href={navigation.blog.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.blog.name}
            </a>

            {/* Resources */}
            <a
              href={navigation.resources.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.resources.name}
            </a>

            {/* About */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.about.name}
              </div>
              {navigation.about.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Success Ecosystem */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.ecosystem.name}
              </div>
              {navigation.ecosystem.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <button className="w-full mt-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
