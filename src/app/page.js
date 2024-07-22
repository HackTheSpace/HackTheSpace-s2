"use client";

import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Tracks from "@/components/tracks/Tracks";
import WhatIsHTS from "@/components/WhatIsHTS";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FAQsSection from "@/components/FAQs";
import Footer from "@/components/Footer";
import Image from "next/image";
import Glimpse from "@/components/Glimpse";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mouseMovement, setMouseMovement] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseMovement({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Reduced movement factor for smaller area
  const movementFactor = 0.05; // Decrease to reduce movement area
  const maxMovement = 50; // Maximum movement in pixels

  const imageAnimation = {
    initial: { x: 0, y: 0 },
    animate: isHovering
      ? {
          x: Math.min(Math.max((mouseMovement.x - window.innerWidth / 2) * movementFactor, -maxMovement), maxMovement),
          y: Math.min(Math.max((mouseMovement.y - window.innerHeight / 2) * movementFactor, -maxMovement), maxMovement),
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 15,
            duration: 0.2,
          },
        }
      : { x: 0, y: 0 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <main>
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageAnimation}
          className="hero-section__image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/astronaut.svg"
            alt="Astronaut"
            layout="fill"
            objectFit="contain"
            priority
          />
        </motion.div>
        <Navbar />
        <HeroSection />
        <AboutUs />
        <WhatIsHTS />
        <Tracks />
        <Glimpse />
        <FAQsSection />
        <Footer />
      </main>
    </>
  );
}
