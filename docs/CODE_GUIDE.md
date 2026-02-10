# Code Guide - Quick Reference

## 📚 Table of Contents

1. [Component Reference](#component-reference)
2. [Type Definitions](#type-definitions)
3. [Animation System](#animation-system)
4. [Styling Patterns](#styling-patterns)
5. [Common Tasks](#common-tasks)

## Component Reference

### Layout Components

#### Header (`components/layout/Header.tsx`)
**Purpose**: Main navigation with mega menu dropdowns

**Key Features**:
- Multi-column mega menus
- Mobile hamburger menu
- Responsive design
- Headless UI for accessibility

**Usage**:
```tsx
import Header from '@/components/layout/Header';

// Used in root layout - no props needed
<Header />
```

#### Footer (`components/layout/Footer.tsx`)
**Purpose**: Site footer with links and contact info

**Key Features**:
- Multiple link columns
- Contact details with icons
- Social media links
- Newsletter subscription

**Usage**:
```tsx
import Footer from '@/components/layout/Footer';

<Footer />
```

### UI Components

#### Reveal (`components/ui/Reveal.tsx`)
**Purpose**: Scroll-triggered animation wrapper

**Props**:
- `animation`: Animation type (fade-up, fade-down, fade-left, fade-right, zoom-in)
- `duration`: Animation duration in ms (default: 900)
- `delay`: Delay before animation in ms (default: 0)
- `threshold`: Intersection Observer threshold 0-1 (default: 0.2)
- `once`: Animate only once (default: true)
- `as`: HTML tag to render (default: 'div')

**Usage**:
```tsx
<Reveal animation="fade-up" duration={900} delay={100}>
  <YourComponent />
</Reveal>
```

#### ScrollToTop (`components/ui/ScrollToTop.tsx`)
**Purpose**: Floating button to scroll to page top

**Features**:
- Appears after 300px scroll
- Smooth scroll behavior
- Gradient glow effect
- Fixed positioning

**Usage**:
```tsx
import ScrollToTop from '@/components/ui/ScrollToTop';

// Place before closing body tag
<ScrollToTop />
```

### Section Components

#### HeroSection (`components/sections/HeroSection.tsx`)
**Features**:
- Interactive particle system (120 particles)
- Mouse-tracking particle movement
- Floating feature callouts
- Video modal capability
- Gradient backgrounds

**Key Elements**:
- Particle animation with physics
- CTA buttons with glow effects
- Responsive typography
- Video lightbox

#### FeaturesSection (`components/sections/FeaturesSection.tsx`)
**Features**:
- 4-column responsive grid
- Custom SVG icons with gradients
- Card hover effects
- Staggered animations

**Data Structure**:
```typescript
type FeatureDefinition = {
  title: string;
  description: string;
  icon: (gradientId: string) => ReactNode;
}
```

#### HowItWorksSection (`components/sections/HowItWorksSection.tsx`)
**Features**:
- Two-column layout
- Numbered steps with gradient badges
- Background image overlay
- Staggered step animations

**Step Structure**:
```typescript
{
  number: '01',
  title: 'Step Title',
  description: 'Step description'
}
```

#### ProductTabsSection (`components/sections/home/ProductTabsSection.tsx`)
**Features**:
- Tab navigation with keyboard support
- Framer Motion animations
- Feature badge grid
- Image lightbox
- Active tab indication

**Tab Navigation**:
- Arrow Left/Right: Switch tabs
- Click: Select tab
- Focus management for accessibility

#### ClientLogosSection (`components/sections/ClientLogosSection.tsx`)
**Features**:
- Responsive logo grid
- Image optimization
- Hover effects
- Trust indicator text

#### TestimonialsSection (`components/sections/TestimonialsSection.tsx`)
**Features**:
- Two-column grid
- Customer photos
- Quote icons
- Light background theme

#### IndustriesSection (`components/sections/IndustriesSection.tsx`)
**Features**:
- Industry cards with custom icons
- SVG icons with gradients
- Use case descriptions
- Responsive grid

#### DifferentiatorsSection (`components/sections/DifferentiatorsSection.tsx`)
**Features**:
- Comparison cards
- Check icons for benefits
- Three-column grid
- Gradient backgrounds

#### CTASection (`components/sections/CTASection.tsx`)
**Features**:
- Two CTA buttons
- Primary button with gradient glow
- Secondary button with subtle styling
- Centered layout

## Type Definitions

### Common Patterns

#### Component Props
```typescript
type ComponentProps = {
  title: string;
  description?: string;  // Optional
  className?: string;    // For style extension
  children?: ReactNode;  // For composition
};
```

#### Animation Configuration
```typescript
type AnimationConfig = {
  type: 'fade-up' | 'fade-down' | 'zoom-in';
  duration: number;      // milliseconds
  delay: number;         // milliseconds
};
```

#### Menu Item
```typescript
type MenuItem = {
  name: string;
  href: string;
  description?: string;
  icon?: ReactNode;
};
```

## Animation System

### Reveal Component Animations

**fade-up**: Element slides up and fades in
```tsx
<Reveal animation="fade-up" duration={900}>
  <Content />
</Reveal>
```

**fade-down**: Element slides down and fades in
```tsx
<Reveal animation="fade-down" duration={900}>
  <Content />
</Reveal>
```

**fade-left**: Element slides left and fades in
```tsx
<Reveal animation="fade-left" duration={900}>
  <Content />
</Reveal>
```

**fade-right**: Element slides right and fades in
```tsx
<Reveal animation="fade-right" duration={900}>
  <Content />
</Reveal>
```

**zoom-in**: Element scales up and fades in
```tsx
<Reveal animation="zoom-in" duration={900}>
  <Content />
</Reveal>
```

### Staggered Animations

Create a sequence of animations:
```tsx
{items.map((item, index) => (
  <Reveal
    key={item.id}
    animation="fade-up"
    duration={900}
    delay={100 + index * 80}  // 80ms between each
  >
    <Item />
  </Reveal>
))}
```

### Framer Motion

For more control:
```tsx
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence mode="wait">
  <motion.div
    key={activeId}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    Content
  </motion.div>
</AnimatePresence>
```

## Styling Patterns

### Gradient Backgrounds

**Card gradient**:
```typescript
className="bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90"
```

**Text gradient**:
```typescript
className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 text-transparent bg-clip-text"
```

**Border gradient**:
```typescript
className="border border-sky-400/30"
```

### Glass Morphism

```typescript
className="bg-white/5 backdrop-blur-sm border border-white/10"
```

### Glow Effects

**Button glow**:
```tsx
<button className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
  <div className="relative ...">Content</div>
</button>
```

**Shadow glow**:
```typescript
className="shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]"
```

### Responsive Utilities

```typescript
// Mobile first
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Show/hide
className="hidden md:block"

// Sizing
className="text-base md:text-lg lg:text-xl"

// Spacing
className="px-4 md:px-8 lg:px-12"
```

### Hover Effects

```typescript
// Card lift
className="transition-transform hover:-translate-y-2"

// Border color change
className="border border-white/10 hover:border-blue-500/40"

// Background change
className="bg-white/5 hover:bg-white/10"

// Multiple effects
className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
```

## Common Tasks

### Adding a New Section

1. **Create the component file**:
```bash
touch components/sections/NewSection.tsx
```

2. **Basic structure**:
```tsx
'use client';

import Reveal from '@/components/ui/Reveal';

/**
 * NewSection - Description of what it does
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 */
export default function NewSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal animation="fade-up" duration={900}>
          <h2 className="text-4xl font-bold text-white">
            Section Title
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
```

3. **Add to page**:
```tsx
import NewSection from '@/components/sections/NewSection';

export default function Page() {
  return (
    <>
      {/* Other sections */}
      <Reveal animation="fade-up" duration={900}>
        <NewSection />
      </Reveal>
    </>
  );
}
```

### Creating Custom Icons

**SVG with gradient**:
```tsx
<svg viewBox="0 0 64 64" className="h-12 w-12">
  <defs>
    <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" />
      <stop offset="50%" stopColor="#6366f1" />
      <stop offset="100%" stopColor="#a855f7" />
    </linearGradient>
  </defs>
  <path d="..." fill="url(#custom-gradient)" />
</svg>
```

### Adding Images

**Next.js Image component**:
```tsx
import Image from 'next/image';

<Image
  src="/images/example.jpg"
  alt="Descriptive text"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
  className="object-cover"
/>
```

### Creating Modal/Lightbox

```tsx
const [isOpen, setIsOpen] = useState(false);

// Trigger
<button onClick={() => setIsOpen(true)}>
  Open Modal
</button>

// Modal
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    />
    
    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto p-4">
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      
      {/* Modal content */}
    </div>
  </div>
)}
```

### Tab Navigation

```tsx
const [activeTab, setActiveTab] = useState('tab1');

<div role="tablist">
  {tabs.map(tab => (
    <button
      key={tab.id}
      role="tab"
      aria-selected={tab.id === activeTab}
      onClick={() => setActiveTab(tab.id)}
      className={tab.id === activeTab ? 'active-class' : 'inactive-class'}
    >
      {tab.label}
    </button>
  ))}
</div>

<div role="tabpanel">
  {/* Content for active tab */}
</div>
```

### Responsive Grid Layouts

**Equal columns**:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
```

**Variable columns**:
```tsx
// 3 cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// 2 cards  
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// Back to 3 cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## Quick Reference: Class Combinations

### Card Style
```typescript
"relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-8 transition-transform duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]"
```

### Button Primary
```typescript
"relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
```

### Button Secondary
```typescript
"inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/80 hover:bg-white/10 hover:text-white transition-all"
```

### Section Container
```typescript
"relative bg-black py-24 overflow-hidden"
```

### Content Wrapper
```typescript
"mx-auto max-w-7xl px-4"
```

### Heading
```typescript
"text-4xl md:text-5xl font-bold text-white"
```

### Description
```typescript
"text-lg text-white/70 leading-relaxed"
```

## Debugging Tips

### Check Component Rendering
```tsx
console.log('Component rendered', { props });
```

### Verify Animation Triggers
- Open DevTools
- Check Intersection Observer entries
- Verify `is-visible` class is added

### Test Responsive Design
- Use browser DevTools device emulation
- Test breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

### Accessibility Check
- Tab through all interactive elements
- Test with screen reader
- Verify ARIA attributes in DevTools

---

**Need more help?** Check [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed guidelines.
