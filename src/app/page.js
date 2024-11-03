import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhatIsHTS from "@/components/WhatIsHTS";
import Glimpse from "@/components/Glimpse";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Glimpse />
      </main>
    </>
  );
}
