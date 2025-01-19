import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhatIsHTS from "@/components/WhatIsHTS";
import Glimpse from "@/components/Glimpse";
import Venue from "@/components/Venue";
import Schedule from "@/components/Schedule";
import Prize from "@/components/prize/Prize";
import Tracks from "@/components/tracks/Tracks";
import FAQsSection from "@/components/FAQs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Venue />
        <Schedule />
        <Prize />
        <Tracks />
        <Glimpse />
        <FAQsSection />
      </main>
    </>
  );
}
