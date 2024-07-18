import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Tracks from "@/components/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhatIsHTS />
      <Tracks />
    </main>
  );
}
