# Contributing Guide

## Code Documentation Standards

All code in this project follows comprehensive documentation standards to ensure maintainability and ease of understanding.

### Documentation Comments

We use JSDoc-style comments throughout the codebase:

```typescript
/**
 * Component Description - Brief summary of what it does
 * 
 * Detailed explanation of the component's purpose,
 * features, and behavior.
 * 
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 */
```

### Component Documentation

Every component should include:

1. **Header comment** explaining:
   - Component purpose
   - Main features
   - Key interactions
   - State management (if applicable)

2. **Type documentation** for:
   - Props interfaces
   - State types
   - Constants and configurations

3. **Function documentation** for:
   - Event handlers
   - Helper functions
   - Utility methods

### Example Component Structure

```tsx
'use client';

import { useState } from 'react';

/**
 * Configuration type for component options
 * @property {string} name - Display name
 * @property {boolean} enabled - Whether feature is enabled
 */
type Config = {
  name: string;
  enabled: boolean;
};

/**
 * MyComponent - Brief description
 * 
 * Detailed explanation of what this component does,
 * its features, and how to use it.
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * - Feature 3
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display
 */
export default function MyComponent({ title }: { title: string }) {
  const [active, setActive] = useState(false);
  
  /**
   * Handles click events and toggles active state
   */
  const handleClick = () => {
    setActive(!active);
  };
  
  return <div onClick={handleClick}>{title}</div>;
}
```

## Project Structure

### Directory Organization

```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with metadata
├── page.tsx           # Home page
└── [route]/           # Additional routes
    └── page.tsx

components/
├── layout/            # Layout components (Header, Footer)
├── sections/          # Page section components
│   └── home/         # Home page specific sections
└── ui/               # Reusable UI components

public/
├── icons/            # SVG and icon files
└── images/           # Image assets
    ├── backgrounds/
    ├── logos/
    ├── products/
    └── testimonials/
```

### Component Categories

#### 1. Layout Components
- **Header**: Navigation with mega menus
- **Footer**: Site links and contact info
- Location: `components/layout/`

#### 2. Section Components
- Large, full-width page sections
- Examples: HeroSection, FeaturesSection
- Location: `components/sections/`

#### 3. UI Components
- Reusable, smaller components
- Examples: Reveal (animation wrapper), ScrollToTop
- Location: `components/ui/`

## Code Conventions

### TypeScript

- Use **explicit types** for all props and state
- Define types inline or at the top of the file
- Use `type` for object shapes, `interface` for extensible contracts

```typescript
// Good
type Props = {
  title: string;
  count: number;
};

// Also good for component props
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}
```

### React Patterns

#### Client Components
- Mark with `'use client';` at the top
- Used for interactive components with state/effects

#### Props Destructuring
```typescript
export default function MyComponent({ 
  title, 
  description,
  className = '' 
}: Props) {
  // Component body
}
```

#### State Management
```typescript
// Simple state
const [isOpen, setIsOpen] = useState(false);

// Complex state with type
const [config, setConfig] = useState<Config>({
  name: 'default',
  enabled: true
});
```

### Styling Conventions

#### Tailwind CSS Classes
- Use utility-first approach
- Group related utilities together
- Use responsive prefixes: `md:`, `lg:`
- Use state variants: `hover:`, `focus:`, `group-hover:`

```typescript
className="relative flex items-center gap-4 rounded-lg border border-white/10 bg-black/50 p-6 transition-all hover:border-white/20 hover:bg-black/60"
```

#### Custom CSS Variables
- Use CSS custom properties for dynamic values
- Define in `globals.css` or inline styles

```css
/* globals.css */
:root {
  --color-primary: #3b82f6;
}
```

### Animation Patterns

#### Using Reveal Component
```tsx
<Reveal 
  animation="fade-up" 
  duration={900} 
  delay={100}
>
  <YourComponent />
</Reveal>
```

Animation types:
- `fade-up` - Fade in from bottom
- `fade-down` - Fade in from top
- `fade-left` - Fade in from right
- `fade-right` - Fade in from left
- `zoom-in` - Scale up from center

#### Framer Motion
For more complex animations, use Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Best Practices

### Performance

1. **Image Optimization**
   - Use Next.js `Image` component
   - Provide `sizes` prop for responsive images
   - Use appropriate image formats (WebP)

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Leverage Next.js automatic code splitting

```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />
});
```

3. **Memoization**
   - Use `useCallback` for event handlers passed as props
   - Use `useMemo` for expensive calculations

```tsx
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

### Accessibility

1. **Semantic HTML**
   - Use appropriate HTML elements
   - Provide meaningful landmarks

```tsx
<section aria-labelledby="section-title">
  <h2 id="section-title">Section Title</h2>
</section>
```

2. **ARIA Attributes**
   - Add `aria-label` for icon buttons
   - Use `aria-hidden` for decorative elements
   - Implement `role` and `aria-*` for custom components

```tsx
<button aria-label="Close menu" onClick={handleClose}>
  <XMarkIcon aria-hidden="true" />
</button>
```

3. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Implement proper focus management
   - Use `tabIndex` appropriately

4. **Reduced Motion**
   - Respect `prefers-reduced-motion` setting
   - The Reveal component handles this automatically

### SEO

1. **Metadata**
   - Use Next.js `Metadata` API in layouts
   - Provide unique titles and descriptions

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO'
};
```

2. **Structured Data**
   - Use `react-schemaorg` for JSON-LD
   - Include relevant schema types

## Testing Guidelines

### Component Testing
- Test user interactions
- Verify accessibility
- Check responsive behavior

### Visual Testing
- Test on multiple screen sizes
- Verify animations and transitions
- Check hover states

## Git Workflow

### Commit Messages
Follow conventional commit format:

```
type(scope): subject

body (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test updates
- `chore`: Build/tooling changes

Example:
```
feat(hero): add video modal functionality

- Add video modal state management
- Implement backdrop click to close
- Add keyboard ESC support
```

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

## Getting Help

### Understanding Components

1. **Read the JSDoc comments** - Every component has comprehensive documentation
2. **Check the README.md** - High-level project overview
3. **Review similar components** - Look at existing code for patterns
4. **Inspect the types** - TypeScript types document expected shapes

### Common Patterns

#### Creating a New Section Component

1. Create file in `components/sections/`
2. Add JSDoc comments explaining purpose
3. Define types for any configuration data
4. Use Reveal component for scroll animations
5. Follow responsive design patterns
6. Test accessibility

#### Adding a New Page

1. Create route folder in `app/`
2. Add `page.tsx` with default export
3. Optionally add page-specific `layout.tsx`
4. Import and use section components
5. Wrap sections with Reveal for animations

## Code Review Checklist

- [ ] Code is properly documented with JSDoc comments
- [ ] TypeScript types are defined and accurate
- [ ] Component is responsive (mobile, tablet, desktop)
- [ ] Accessibility attributes are present
- [ ] Images use Next.js Image component
- [ ] Animations respect reduced motion preferences
- [ ] Code follows existing patterns and conventions
- [ ] No console.log or debug code remains
- [ ] Performance considerations addressed

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
