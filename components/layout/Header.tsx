'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Main navigation structure containing all menu sections and their items
 * Each section has a name, description, and array of menu items for the mega menu
 */
const navigation = {
  platform: {
    name: 'Platform',
    hasDropdown: true,
    items: [
      { name: 'Dev Studio', description: 'No-code agentic platform delivering the fastest time-to-value and the highest ROI', href: '/platform/dev-studio' },
      { name: 'Agentic AI Hub', description: 'Environment for configuring AI agents', href: '/platform/agentic-ai-hub' },
    ],
  },
  solutions: {
    name: 'Solutions',
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
  industries: {
    name: 'Industries',
    hasDropdown: true,
    items: [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Industrial Parks', href: '/industries/industrial-parks' },
      { name: 'Banking & Finance', href: '/industries/banking-finance' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  },
  resources: {
    name: 'Resources',
    hasDropdown: true,
    items: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'FAQ', href: '/resources' },
      { name: 'Training & Knowledge', href: '/ecosystem/training' },
    ],
  },
  about: {
    name: 'About Us',
    hasDropdown: true,
    items: [
      { name: 'StackPort — Partner Program', href: '/ecosystem/stackport' },
      { name: 'Our Company', href: '/about/company' },
      { name: 'Contact Us', href: '/about/contact' },
    ],
  },
};

/**
 * Header Component - Main navigation bar with mega menu dropdowns
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Multi-column mega menu dropdowns for desktop
 * - Smooth transitions and hover effects
 * - Headless UI for accessible dropdown menus
 * - Sticky positioning with backdrop blur
 * 
 * The header includes:
 * - Logo and branding
 * - Platform, Solutions, Resources, and About Us menus
 * - Mobile hamburger menu
 * - Contact CTA button
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full py-[20px] border-b border-white/10 ${isHomePage ? 'bg-black/50 backdrop-blur-md' : 'bg-[#061423]'}`}>
      <div className="max-w-[80rem] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Stackyon home">
          <Image
            src="/images/logos/stackyon-logo-white.png"
            alt="Stackyon Logo"
            width={128}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 ml-16">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu('platform')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              href="/platform"
              className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
            >
              Platform
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${hoveredMenu === 'platform' ? 'rotate-180' : ''}`}
              />
            </Link>
            <Transition
              show={hoveredMenu === 'platform'}
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="transform opacity-0 -translate-y-1"
              enterTo="transform opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 translate-y-0"
              leaveTo="transform opacity-0 -translate-y-1"
            >
              <div
                className="fixed left-0 right-0 z-50 mt-3 border-t border-gray-200 bg-white shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] focus:outline-none"
              >
                <div className="max-w-[80rem] mx-auto px-4 py-16">
                  <div className="grid grid-cols-2 gap-12 max-w-[680px]">
                    {/* Platform Column */}
                    <div>
                      <div className="mb-4">
                        <Link
                          href="/platform"
                          onClick={() => setHoveredMenu(null)}
                        >
                          <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider hover:text-blue-600 transition-colors cursor-pointer">Platform</h3>
                        </Link>
                      </div>
                      <div className="space-y-2">
                        {navigation.platform.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-1.5 text-base text-gray-900 hover:text-gray-600 transition-colors"
                            onClick={() => setHoveredMenu(null)}
                          >
                            <div className="font-medium">{item.name}</div>
                            {item.description && (
                              <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider">Solutions</h3>
                      </div>
                      <div className="space-y-2">
                        {navigation.solutions.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-1.5 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                            onClick={() => setHoveredMenu(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          {/* AI-native Healthcare Link */}
          <Link
            href="/ai-native-healthcare"
            className="text-white/90 hover:text-white transition-colors"
          >
            AI-native Healthcare
          </Link>

          {/* Industries Dropdown */}
          {isMounted ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
                {navigation.industries.name}
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
                <Menu.Items
                  className="absolute left-0 mt-3 w-[300px] rounded-3xl bg-white border border-black/5 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] focus:outline-none"
                >
                  <div className="p-6">
                    <div className="space-y-1">
                      {navigation.industries.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block py-2 text-base transition-colors ${
                                active ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900'
                              }`}
                            >
                              <div className="font-semibold">{item.name}</div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="flex items-center gap-1 text-white/90">
              {navigation.industries.name}
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          )}

          {/* Resources Dropdown */}
          {isMounted ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
                {navigation.resources.name}
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
                <Menu.Items
                  className="absolute left-0 mt-3 w-[300px] rounded-3xl bg-white border border-black/5 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] focus:outline-none"
                >
                  <div className="p-6">
                    <div className="space-y-1">
                      {navigation.resources.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block py-2 text-base transition-colors ${
                                active ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900'
                              }`}
                            >
                              <div className="font-semibold">{item.name}</div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="flex items-center gap-1 text-white/90">
              {navigation.resources.name}
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          )}

          {/* About Dropdown */}
          {isMounted ? (
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
                <Menu.Items
                  className="absolute left-0 mt-3 w-[300px] rounded-3xl bg-white border border-black/5 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] focus:outline-none"
                >
                  <div className="p-6">
                    <div className="space-y-1">
                      {navigation.about.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block py-2 text-base transition-colors ${
                                active ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900'
                              }`}
                            >
                              <div className="font-semibold">{item.name}</div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="flex items-center gap-1 text-white/90">
              {navigation.about.name}
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          )}
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
            {/* Platform */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                Platform
              </div>
              {navigation.platform.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Solutions */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.solutions.name}
              </div>
              {navigation.solutions.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* AI-native Healthcare */}
            <Link
              href="/ai-native-healthcare"
              className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI-native Healthcare
            </Link>

            {/* Industries */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.industries.name}
              </div>
              {navigation.industries.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.resources.name}
              </div>
              {navigation.resources.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* About */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.about.name}
              </div>
              {navigation.about.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
