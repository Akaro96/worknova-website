
import React from 'react';
import { Hero } from '../components/Hero';
import { TargetGroups } from '../components/TargetGroups';
import { DashboardPreview } from '../components/DashboardPreview';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      {/* --- LANDING PAGE SPECIFIC BACKGROUNDS (GPU-optimized, no blur) --- */}
      {/* Left Large Beige Circle - Using absolute instead of fixed for better perf */}
      <div className="absolute top-[-10vh] left-[-25vw] w-[65vw] h-[65vw] rounded-full bg-[#fff6ec] pointer-events-none z-0 will-change-transform transform-gpu"></div>

      {/* Right Gray/Blue Background Sphere */}
      <div className="absolute top-[5vh] right-[-10vw] w-[55vw] h-[55vw] rounded-full bg-[#f1f5f9] pointer-events-none z-0 will-change-transform transform-gpu"></div>

      {/* Global Noise Overlay - Reduced opacity for performance */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0 mix-blend-multiply"></div>

      <main className="relative z-10 flex flex-col">
        <Hero />
        <TargetGroups />
        {/* CompaniesSection removed from here */}
        <DashboardPreview />
        <ProcessTimeline />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
