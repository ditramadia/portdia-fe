'use client';

import AboutSection from "@/components/organism/AboutSection";
// Components
import HeroSection from "@/components/organism/HeroSection";

export default function Home() {
  
  return (
    <div className="max-h-screen overflow-x-hidden flex flex-col items-center">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
