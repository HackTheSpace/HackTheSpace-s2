import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhatIsHTS from "@/components/WhatIsHTS";
import Glimpse from "@/components/Glimpse";
import Organizers from "@/components/Organizers";
import Judge from "@/components/Judge";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Glimpse />
        <Judge />
        {/* <Organizers /> */}
      </main>
    </>
  );
}
