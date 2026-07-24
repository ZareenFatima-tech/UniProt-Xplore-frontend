'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroBackgroundMedia from './HeroBackgroundMedia';
import HeroContent from './HeroContent';
import WhatIsSection from './WhatIsSection';
import WhyDifferentSection from './WhyDifferentSection';
import HowItWorksContent from './HowItWorksContent';
import ResearchApplications from './ResearchApplications';
import Pricing from './Pricing';
import FinalCTA from './FinalCTA';
import { ReducedMotionProvider } from '../../hooks/useReducedMotion';

export const LandingPageClient: React.FC = () => {
  return (
    <ReducedMotionProvider>
      <div className="relative min-h-screen bg-[#0B2B26] text-[#E3E9E8] flex flex-col font-sans">
        
        {/* Navigation bar */}
        <Navbar />

        {/* 1. Hero Zone (Looping MP4 Media Background + Scrim + DOM Overlay with System Introduction) */}
        <section className="relative w-full min-h-[88vh] flex items-center justify-center border-b border-[#4A6572]/35 overflow-hidden">
          <HeroBackgroundMedia videoSrc="/Uniprotdemo.mp4" posterSrc="/hero-poster.jpg" />
          <HeroContent />
        </section>

        {/* 2. What Is UniProtXplore Section Teaser */}
        <WhatIsSection />

        {/* 3. Platform Section: System Differentiation / Why UniProtXplore Is Different */}
        <WhyDifferentSection />

        {/* 4. How It Works (Circular 8-Stage Workflow) */}
        <section id="how-it-works" className="relative w-full">
          <HowItWorksContent />
        </section>

        {/* 5. Research Applications */}
        <ResearchApplications />

        {/* 6. Platform Pricing (3 Tiers: Free, Lab, Institution) */}
        <Pricing />

        {/* 7. Final CTA */}
        <FinalCTA />

        {/* Navigation Footer */}
        <Footer />
      </div>
    </ReducedMotionProvider>
  );
};

export default LandingPageClient;
