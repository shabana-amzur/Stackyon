
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

/**
 * Animation type for the reveal effect
 * - fade-up: Element fades in from bottom to top
 * - fade-down: Element fades in from top to bottom
 * - fade-left: Element fades in from right to left
 * - fade-right: Element fades in from left to right
 * - zoom-in: Element scales up from center
 */
type RevealAnimation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';

/**
 * HTML semantic tags allowed for the Reveal component wrapper
 */
type AllowedTags = 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer';

/**
 * Props for the Reveal component
 * @property {AllowedTags} as - HTML tag to render (default: 'div')
 * @property {RevealAnimation} animation - Type of animation effect (default: 'fade-up')
 * @property {number} duration - Animation duration in milliseconds (default: 900)
 * @property {number} delay - Delay before animation starts in milliseconds (default: 0)
 * @property {number} threshold - Intersection Observer threshold (0-1) for triggering animation (default: 0.2)
 * @property {boolean} once - Whether animation should only happen once (default: true)
 * @property {ReactNode} children - Child elements to animate
 * @property {string} className - Additional CSS classes
 * @property {CSSProperties} style - Inline styles
 */
type RevealProps = {
  as?: AllowedTags;
  animation?: RevealAnimation;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'style'>;

/**
 * Reveal Component - Provides scroll-triggered animations for child elements
 * 
 * This component uses Intersection Observer API to detect when elements enter the viewport
 * and triggers animations. It respects user's reduced motion preferences for accessibility.
 * 
 * Features:
 * - Multiple animation types (fade, zoom)
 * - Configurable duration and delay
 * - Respects prefers-reduced-motion
 * - Can animate once or repeatedly
 * - Customizable intersection threshold
 * 
 * @example
 * ```tsx
 * <Reveal animation="fade-up" duration={900} delay={100}>
 *   <YourComponent />
 * </Reveal>
 * ```
 */
export default function Reveal({
  as = 'div',
  animation = 'fade-up',
  duration = 900,
  delay = 0,
  threshold = 0.2,
  once = true,
  children,
  className = '',
  style,
  ...rest
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldReduce = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    setPrefersReducedMotion(shouldReduce);
    if (shouldReduce) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      const shouldReduce = mediaQuery.matches;
      setPrefersReducedMotion(shouldReduce);
      if (shouldReduce) {
        setIsVisible(true);
      } else if (!once) {
        setIsVisible(false);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [once]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target !== element) return;

          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, prefersReducedMotion, threshold]);

  const setElementRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  const Tag = as;
  const classes = [
    'reveal-section',
    `reveal-${animation}`,
    isVisible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={setElementRef}
      className={classes}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
