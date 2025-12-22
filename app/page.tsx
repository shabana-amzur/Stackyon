import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import ClientLogosSection from "@/components/ClientLogosSection";
import ProductTabsSection from "@/components/home/ProductTabsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Reveal animation="fade-up" duration={1100}>
        <HeroSection />
      </Reveal>
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
      <Reveal animation="fade-left" duration={950} delay={120}>
        <WhatSetsUsApartSection />
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
      <Reveal animation="zoom-in" duration={850} delay={80}>
        <CTASection />
      </Reveal>
    </div>
  );
}
