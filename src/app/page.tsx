'use client';

// Components
import HeroSection from "@/components/organism/Hero";
import AboutSection from "@/components/organism/About";
import Contact from "@/components/organism/Contact";

export default function Home() {
  
  return (
    <div className="min-h-screen h-fit overflow-x-hidden flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <Contact />
    </div>
  );
}
