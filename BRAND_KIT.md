# Stackyon Brand Kit

## Color Palette

### Primary Gradient
```css
bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
```
- Use for: Button backgrounds, text highlights, feature elements
- Hover state: White background with black text

### Background Colors
- **Primary Background**: `bg-black`
- **Card/Box Background**: `bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90`
- **Overlay on Hover**: `bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-purple-500/10`

### Border Colors
- **Default**: `border-white/10`
- **Hover**: `border-blue-500/40`
- **Transparent**: `border-transparent`

### Text Colors
- **Primary Text**: `text-white`
- **Secondary Text**: `text-white/70`
- **Tertiary Text**: `text-white/80`
- **Muted Text**: `text-white/60`

## Typography

### Font Family
- **Primary Font**: Inter
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Import**: Google Fonts via `next/font/google`

### Font Sizes
- **Paragraph Text (Global)**: `18px` or `text-lg`
- **Small Text**: `text-sm` (14px)
- **Base Text**: `text-base` (16px)
- **Large Text**: `text-xl` (20px)
- **Heading 3**: `text-2xl` (24px)
- **Heading 2**: `text-4xl md:text-5xl` (36px → 48px)
- **Heading 1**: `text-5xl md:text-6xl lg:text-7xl` (48px → 60px → 72px)

### Font Weights
- **Body Default**: `font-normal` (400)
- **Headings**: `font-bold` (700) or `font-semibold` (600)
- **Medium**: `font-medium` (500)

### Line Heights
- **Tight**: `leading-tight` - For large headings
- **Snug**: `leading-snug` - For medium headings
- **Relaxed**: `leading-relaxed` - For body paragraphs

## Card/Box Components

### Standard Card Format
```tsx
<article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-8 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]">
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-sky-500/5 group-hover:to-purple-500/10" />
  
  <div className="relative z-10 flex flex-col gap-6">
    {/* Content here */}
  </div>
</article>
```

### Card Specifications
- **Border Radius**: `rounded-3xl` (24px) or `rounded-2xl` (16px)
- **Padding**: `p-8` (32px) or `p-10` (40px)
- **Border**: `border border-white/10`
- **Hover Effects**:
  - Lift: `hover:-translate-y-2`
  - Border: `hover:border-blue-500/40`
  - Shadow: `hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]`
- **Gradient Overlay**: Animates from transparent to subtle blue/purple on hover
- **Transition**: `duration-500` (transform), `duration-700` (gradient)

## Button Styles

### Primary Button (Gradient)
```tsx
<button className="flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-lg hover:bg-none hover:!bg-white hover:text-black transition-all">
  Button Text
</button>
```

### Secondary Button (Transparent)
```tsx
<button className="rounded-lg bg-transparent border border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white hover:text-black">
  Button Text
</button>
```

### Button Specifications
- **Primary**: Gradient background, white text → hover: white bg, black text
- **Secondary**: Transparent bg with white border → hover: white bg, black text
- **Padding**: `px-8 py-3.5` (standard), `px-10 py-4` (large)
- **Border Radius**: `rounded-lg` (8px) or `rounded-full` (full)
- **Font Weight**: `font-medium` or `font-semibold`
- **Transition**: `transition-all`
- **With Glow Effect**: Add wrapper with gradient blur shadow

### Button with Glow
```tsx
<div className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
  <button className="relative ...">Button Text</button>
</div>
```

## Icon Styles

### Checkmark Icons
```tsx
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
  <Check className="w-5 h-5" strokeWidth={2.5} />
</div>
```

### Icon Specifications
- **Background**: Circular gradient `from-blue-500 to-purple-500`
- **Size**: `w-10 h-10` (40px) for large, `w-7 h-7` (28px) for small
- **Icon Size**: `w-5 h-5` (20px) or `w-4 h-4` (16px)
- **Icon Library**: Lucide React (`Check` component)
- **Stroke Width**: `2.5`

## Floating Cards (Hero Section)

### Floating Box Format
```tsx
<div className="hero-float-card absolute ... flex w-48 flex-col gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-sky-500/35 via-blue-500/15 to-teal-400/10 px-6 py-5 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.55)] backdrop-blur-xl">
  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3rem] text-sky-300/80">
    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-purple-500" />
    LABEL
  </span>
  <p className="text-[20px] font-semibold text-white">Heading</p>
  <p className="text-[18px] text-white/60">Description text</p>
</div>
```

### Specifications
- **Label**: 10px, uppercase, tracking-[0.3rem]
- **Heading**: 20px, font-semibold
- **Description**: 18px, text-white/60
- **Padding**: px-6 py-5
- **Width**: w-48 (192px)
- **Border**: border-white/15
- **Backdrop**: backdrop-blur-xl

## Spacing

### Section Padding
- **Vertical**: `py-24` (96px top and bottom)
- **Horizontal**: `px-4` (16px) with max-width container

### Gap Spacing
- **Small**: `gap-3` (12px) or `gap-4` (16px)
- **Medium**: `gap-6` (24px) or `gap-8` (32px)
- **Large**: `gap-12` (48px) or `gap-16` (64px)

### Margin Spacing
- **Bottom (headings)**: `mb-6` (24px) or `mb-8` (32px)
- **Bottom (paragraphs)**: `mb-12` (48px)

## Animations

### Hover Transitions
- **Transform**: `transition-transform duration-500 ease-out`
- **All Properties**: `transition-all`
- **Gradient**: `transition-all duration-700`
- **Opacity**: `transition-opacity`

### Lift on Hover
```css
hover:-translate-y-2
```

### Reveal Animations
- Use `<Reveal>` component with:
  - `animation="fade-up"` or `fade-down` or `zoom-in"`
  - `duration={950}` to `{1200}`
  - `delay={140}` with increments of 110-140ms

## Grid Layouts

### Standard Grid
```tsx
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Responsive Breakpoints
- **Mobile**: 1 column (default)
- **Tablet**: `md:grid-cols-2` (2 columns at 768px+)
- **Desktop**: `lg:grid-cols-3` or `lg:grid-cols-4` (3-4 columns at 1024px+)

### Gap
- **Standard**: `gap-6` (24px) or `gap-8` (32px)

## Shadows

### Card Shadows
- **Default**: `shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]`
- **Hover**: Enhanced opacity or larger spread
- **Glow Effect**: `blur-xl opacity-50 group-hover:opacity-75`

## Usage Guidelines

### When to Use Gradient Colors
1. Button backgrounds (primary CTA)
2. Text highlights in headings
3. Icon backgrounds (checkmarks, badges)
4. Floating card accents
5. Hover overlays on cards

### When to Use White Background
1. Button hover states
2. Modal/dialog backgrounds (if needed)
3. High-emphasis content areas

### Consistency Checklist
- ✅ All cards use the same background gradient
- ✅ All hover states lift cards by 2 units
- ✅ All borders use white/10 default, blue-500/40 on hover
- ✅ All checkmarks use circular gradient backgrounds
- ✅ All paragraphs are 18px
- ✅ All buttons use primary gradient or transparent with white border
- ✅ All button hovers change to white bg with black text
- ✅ Font weights stay within 300-600 range

## Quick Reference

### Copy-Paste Snippets

**Standard Card:**
```
group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90 p-8 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.45)]
```

**Primary Button:**
```
flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-lg hover:bg-none hover:!bg-white hover:text-black transition-all
```

**Brand Gradient:**
```
bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
```

**Checkmark Icon:**
```tsx
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
  <Check className="w-5 h-5" strokeWidth={2.5} />
</div>
```

---

**Last Updated**: February 10, 2026  
**Version**: 1.0
