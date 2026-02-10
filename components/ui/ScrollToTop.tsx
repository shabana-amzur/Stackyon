'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

/**
 * ScrollToTop Component - Provides a floating button to scroll back to the top of the page
 * 
 * This component displays a fixed-position button in the bottom-right corner when the user
 * scrolls down more than 300px. Clicking the button smoothly scrolls to the top of the page.
 * 
 * Features:
 * - Appears after scrolling 300px down
 * - Smooth scroll animation
 * - Gradient background with hover effects
 * - Accessible with aria-label
 * - Fixed positioning with z-index for visibility
 * 
 * @returns {JSX.Element | null} Button element when visible, null otherwise
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all">
            <ArrowUpIcon className="h-5 w-5" />
          </div>
        </button>
      )}
    </>
  );
}
