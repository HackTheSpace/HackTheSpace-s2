"use client";

import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Tracks from "@/components/tracks/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FAQsSection from "@/components/FAQs";
import Footer from "@/components/Footer";
import Image from "next/image";
import Glimpse from "@/components/Glimpse";
import Team from "@/components/Team";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <main>
        <Navbar />
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Tracks />
        <Glimpse/>
        <Team />
        <FAQsSection />
        <Footer />
      </main>
    </>
  );
}
