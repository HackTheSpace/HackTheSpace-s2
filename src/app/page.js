import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhatIsHTS from "@/components/WhatIsHTS";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhatIsHTS />
    </main>
  );
}
