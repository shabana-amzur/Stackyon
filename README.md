# Stackyon

A modern, high-performance marketing website built with Next.js 16, featuring stunning animations, interactive components, and optimized user experience.

## 🚀 Overview

Stackyon is a sophisticated landing page showcasing a platform solution with multiple sections including features, testimonials, client logos, and a comprehensive platform page. The project leverages cutting-edge web technologies to deliver a smooth, engaging user experience with SEO optimization built-in.

## ✨ Key Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4
- **Smooth Animations**: Powered by Framer Motion with custom reveal animations
- **SEO Optimized**: Integrated with next-seo and structured data using schema-dts
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Tab navigation, testimonials carousel, and dynamic sections
- **Performance Optimized**: Sharp for image optimization, React Compiler for faster builds
- **Accessibility First**: ARIA-compliant components using Headless UI

## 📦 Tech Stack

### Core
- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling

### UI & Animation
- **Framer Motion 12.23.26** - Animation library
- **Headless UI 2.2.9** - Unstyled, accessible components
- **Heroicons 2.2.0** - Beautiful hand-crafted SVG icons
- **Lucide React 0.562.0** - Additional icon library

### SEO & Performance
- **next-seo 7.0.1** - SEO management
- **react-schemaorg 2.0.0** - JSON-LD structured data
- **Sharp 0.34.5** - Image optimization

## 🏗️ Project Structure

```
stackyon/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── platform/            # Platform page
│       └── page.tsx
├── components/
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/            # Page sections
│   │   ├── ClientLogosSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── DifferentiatorsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── WhatSetsUsApartSection.tsx
│   │   └── home/
│   │       └── ProductTabsSection.tsx
│   └── ui/                  # Reusable UI components
│       ├── Reveal.tsx       # Animation wrapper
│       └── ScrollToTop.tsx  # Scroll utility
├── public/
│   ├── icons/               # Icon assets
│   └── images/              # Image assets
│       ├── backgrounds/
│       ├── logos/
│       ├── products/
│       └── testimonials/
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stackyon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 Pages

### Home Page (`/`)
The main landing page featuring:
- Hero section with particle effects
- Client logos showcase
- Features overview
- How it works process
- Product tabs with interactive navigation
- Differentiators
- Industries served
- Customer testimonials
- Call-to-action section

All sections are wrapped with the `Reveal` component for smooth scroll animations.

### Platform Page (`/platform`)
Detailed platform information with:
- Gradient hero banner
- Feature highlights
- Technical capabilities
- Integration options
- Use cases

## 🎨 Key Components

### Reveal Component
A reusable animation wrapper that provides:
- Multiple animation types: fade-up, fade-down, fade-left, fade-right, zoom-in
- Configurable duration and delay
- Smooth scroll-triggered animations using Framer Motion

Usage:
```tsx
<Reveal animation="fade-up" duration={900} delay={80}>
  <YourComponent />
</Reveal>
```

### Hero Section
Features:
- Interactive particle system with mouse tracking
- Gradient backgrounds with noise texture
- Responsive design
- Video modal integration

### Product Tabs Section
- Tab-based navigation
- Smooth transitions
- Icon integration with Lucide React

## 🎯 Design System

### Colors
- Primary: Purple/Blue gradient themes
- Background: Black base with gradient overlays
- Accents: Subtle purple and blue highlights

### Typography
- Uses Next.js font optimization
- Geist font family integration

### Animation Philosophy
- Staggered entrance animations
- Smooth transitions with Framer Motion
- Performance-optimized with reduced motion support

## 🔧 Configuration

### Next.js Config
Located in `next.config.ts` - customize build settings, image domains, and more.

### Tailwind Config
Tailwind CSS 4 with PostCSS configuration in `postcss.config.mjs`.

### TypeScript Config
Strict mode enabled for better type safety in `tsconfig.json`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build  # Generate production build
npm run start  # Start production server
```

The build output will be in `.next` directory.

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=
```

## 📖 Documentation

This project includes comprehensive code documentation:

- **JSDoc Comments**: All components, functions, and types are documented with detailed JSDoc comments
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: Complete guide to code standards, patterns, and best practices
- **[CODE_GUIDE.md](docs/CODE_GUIDE.md)**: Quick reference guide with examples and common tasks

### Understanding the Code

Every component includes:
- Purpose and feature description
- Props/type documentation
- Usage examples
- Implementation details

Example from Reveal component:
```typescript
/**
 * Reveal Component - Provides scroll-triggered animations
 * 
 * Features:
 * - Multiple animation types (fade, zoom)
 * - Configurable duration and delay
 * - Respects prefers-reduced-motion
 * 
 * @param animation - Type of animation effect
 * @param duration - Animation duration in ms
 */
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Code documentation standards
- Component structure patterns
- Styling conventions
- Accessibility requirements
- Testing guidelines

Quick start:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Follow the code standards in CONTRIBUTING.md
4. Add JSDoc comments to all new code
5. Commit changes: `git commit -m 'feat: add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js)

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is private and proprietary.

## 👥 Support

For support, please contact the development team.
