
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type RevealAnimation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';

type AllowedTags = 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer';

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
  const getPrefersReducedMotion = () =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);
  const [isVisible, setIsVisible] = useState(() => (prefersReducedMotion ? true : false));

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
