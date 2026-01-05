import HeroSection from "@/components/HeroSection";
import ProductTabsSection from "@/components/home/ProductTabsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ProductTabsSection />
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
