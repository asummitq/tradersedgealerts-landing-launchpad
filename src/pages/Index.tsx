
import React from 'react';
import Navbar from '@/components/Navbar';
import LogoSection from '@/components/LogoSection';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChartSection from '@/components/ChartSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-simon-dark text-white">
      <Navbar />
      
      <main>
        <LogoSection />
        <HeroSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
        
        <div id="charts">
          <ChartSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="pricing">
          <PricingSection />
        </div>
        
        <div id="contact">
          <CtaSection />
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
