"use client";

import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import CountdownTimer from "./Timer/CountdownTimer";
const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

const HeroSection = () => {
  // const container = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: container,

  //   offset: ["start start", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);

  const headingAnimation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 4 + i * 0.25,
      },
    }),
  };

  const buttonAnimation = {
    initial: { opacity: 0, y: "100%" },

    enter: {
      opacity: 1,
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 5 },
    },
  };

  return (
    <section id="home" className="hero-section">
      <ThreeScene />
      <Image
        src="/images/backgrounds/bg_2.jpg"
        alt="Background"
        fill
        quality={100}
        priority
        className="hero-section__background"
      />
      <div>
        <div className="hero-section__content">
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <motion.h1
              custom={1}
              variants={headingAnimation}
              initial="initial"
              animate="enter"
            >
              HACK THE
            </motion.h1>
          </div>
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <motion.h1
              custom={2}
              variants={headingAnimation}
              initial="initial"
              animate="enter"
            >
              SPACE
            </motion.h1>
            {/* <motion.h1
              custom={3}
              variants={headingAnimation}
              initial="initial"
              animate="enter"
              className="outlined-text"
            >
              2.0
            </motion.h1> */}
          </div>

          <motion.div className="hero-section__buttons column--count">
            <motion.button
              variants={buttonAnimation}
              initial="initial"
              animate="enter"
            >
              <Link href="mailto:support@hackthespace.co" target="_blank">
                Interested in S3?
              </Link>
            </motion.button>
            {/* <motion.button
              variants={buttonAnimation}
              initial="initial"
              animate="enter"
            >
              <Link
                href="https://www.hackquest.io/en/hackathon/projects/hackathons/HackTheSpace-Season-2"
                target="_blank"
              >
                Past Projects
              </Link>
            </motion.button> */}
            <motion.button
              variants={buttonAnimation}
              initial="initial"
              animate="enter"
            >
              <Link href="https://discord.gg/FJKTSgdxPX" target="_blank">
                DISCORD
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
