import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Tracks from "@/components/tracks/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";
import FAQsSection from "@/components/FAQs";
import Glimpse from "@/components/Glimpse";
import Venue from "@/components/Venue";
// import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Venue />
        <Tracks />
        <Glimpse />
        {/* <Sponsors/> */}
        <FAQsSection />
      </main>
    </>
  );
}
