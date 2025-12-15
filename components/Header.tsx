'use client';

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = {
  solutions: {
    name: 'Solutions',
    href: '/solutions',
  },
  platform: {
    name: 'Platform',
    href: '/platform',
  },
  ecosystem: {
    name: 'Success Ecosystem',
    href: '/success-ecosystem',
  },
  resources: {
    name: 'Resources',
    hasDropdown: true,
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  },
  about: {
    name: 'About Us',
    href: '/about',
  },
  contact: {
    name: 'Contact Us',
    href: '/contact',
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm py-[20px] font-[family-name:var(--font-roboto)] border-b border-white/10">
      <div className="max-w-[80rem] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img 
            src="/stackyon-logo-white.png" 
            alt="Stackyon Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Solutions */}
          <a href={navigation.solutions.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.solutions.name}
          </a>

          {/* Platform */}
          <a href={navigation.platform.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.platform.name}
          </a>

          {/* Success Ecosystem */}
          <a href={navigation.ecosystem.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.ecosystem.name}
          </a>

          {/* Resources Dropdown */}
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
              <Menu.Items className="absolute left-0 mt-3 w-48 origin-top-left rounded-xl bg-black/90 backdrop-blur border border-white/10 shadow-xl focus:outline-none">
                <div className="py-2">
                  {navigation.resources.items.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            active ? 'text-white bg-white/5' : 'text-white/80'
                          }`}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* About Us */}
          <a href={navigation.about.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.about.name}
          </a>

          {/* Contact Us */}
          <a href={navigation.contact.href} className="text-white/90 hover:text-white transition-colors">
            {navigation.contact.name}
          </a>
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
          <div className="max-w-[80rem] mx-auto px-4 py-4 space-y-1">
            {/* Solutions */}
            <a
              href={navigation.solutions.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.solutions.name}
            </a>

            {/* Platform */}
            <a
              href={navigation.platform.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.platform.name}
            </a>

            {/* Success Ecosystem */}
            <a
              href={navigation.ecosystem.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.ecosystem.name}
            </a>

            {/* Resources */}
            <div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                {navigation.resources.name}
              </div>
              {navigation.resources.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 pl-4 text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* About Us */}
            <a
              href={navigation.about.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.about.name}
            </a>

            {/* Contact Us */}
            <a
              href={navigation.contact.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
            >
              {navigation.contact.name}
            </a>

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
