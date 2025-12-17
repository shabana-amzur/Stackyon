import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhatSetsUsApartSection />
      <DifferentiatorsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
