"use client";

import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Tracks from "@/components/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FAQsSection from "@/components/FAQs";

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
    }, 5700);
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
        <FAQsSection />
      </main>
    </>
  );
}
