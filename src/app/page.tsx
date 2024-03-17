'use client';
import { useEffect, useState } from "react";

// Components
import HeroSection from "@/components/organism/Hero";
import AboutSection from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Skill from "@/components/organism/Skill";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })
  
  return (
    <div className={`min-h-screen h-fit overflow-x-hidden flex flex-col items-center ${loading ? '' : 'bg-blue-ellipse bg-no-repeat bg-bottom'}`}>
      <HeroSection />
      <AboutSection />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
