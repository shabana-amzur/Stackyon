import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Reveal from "@/components/ui/Reveal";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import ProductTabsSection from "@/components/sections/home/ProductTabsSection";

/**
 * Home Page - Main landing page for Stackyon
 * 
 * Displays a comprehensive overview of the platform with multiple sections:
 * 1. Hero - Main value proposition with particle effects
 * 2. Client Logos - Social proof from trusted companies
 * 3. Features - Core platform capabilities
 * 4. How It Works - Process explanation
 * 5. Product Tabs - Interactive product showcase
 * 6. Differentiators - What sets Stackyon apart
 * 7. Industries - Target industries served
 * 8. Testimonials - Customer success stories
 * 9. CTA - Final call-to-action
 * 
 * Each section is wrapped with the Reveal component for smooth
 * scroll-triggered animations with varying durations and delays.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <Reveal animation="fade-up" duration={900} delay={60}>
        <ClientLogosSection />
      </Reveal>
      <Reveal animation="fade-up" duration={900} delay={80}>
        <FeaturesSection />
      </Reveal>
      <Reveal animation="fade-right" duration={950} delay={120}>
        <HowItWorksSection />
      </Reveal>
      <Reveal animation="fade-up" duration={900} delay={80}>
        <ProductTabsSection />
      </Reveal>
      <Reveal animation="fade-up" duration={900} delay={100}>
        <DifferentiatorsSection />
      </Reveal>
      <Reveal animation="fade-up" duration={900} delay={100}>
        <IndustriesSection />
      </Reveal>
      <Reveal animation="fade-up" duration={900} delay={100}>
        <TestimonialsSection />
      </Reveal>
    </div>
  );
}
