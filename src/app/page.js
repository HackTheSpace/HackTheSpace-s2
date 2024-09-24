import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Tracks from "@/components/tracks/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";
import FAQsSection from "@/components/FAQs";
import Glimpse from "@/components/Glimpse";
import Venue from "@/components/Venue";
import Team from "./team/page";
// import Sponsors from "@/components/Sponsors";
import Prize from "@/components/prize/Prize";
import Schedule from "@/components/Schedule";

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
        {/* <Team /> */}
        <FAQsSection />
      </main>
    </>
  );
}
