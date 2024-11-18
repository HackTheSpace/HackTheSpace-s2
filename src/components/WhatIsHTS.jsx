"use client";

import React from "react";
import Image from "next/image";
import "../styles/WhatIsHTS.css";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

const WhatIsHTS = () => {
  return (
    <section className="whatIs--section">
      <Image
        src="/images/backgrounds/bg_3.jpg"
        alt="Background"
        fill
        quality={100}
        className="whatIs--section__background"
      />
      <div className="whatIs-container">
        <motion.div
          className="whatIs-moon__container"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <Image
            src="/moon.png"
            alt="moon"
            className="whatIs-moon__image"
            width={1036}
            height={1036}
          />
        </motion.div>

        <div className="whatIs-text__container">
          <div className="whatIs-text__main">
            <h1 className="whatIs-text__shadow">WHAT ?</h1>
            <Heading className="whatIs-text__heading">
              WHAT IS HACKTHESPACE ?
            </Heading>
          </div>
          <div className="whatIs-text__para">
            <Paragraph className="whatIs-text__para1">
              HackTheSpace is an exciting event that takes place in Bhilai,
              India. It is a time-limited event that encourages participants to
              brainstorm, develop, and present their ideas to a panel of judges.
              This event is designed to foster creativity, collaboration, and
              innovation among participants. It offers an excellent opportunity
              for participants to showcase their skills, network with peers, and
              potentially win prizes and recognition for their work.
            </Paragraph>
            <Paragraph className="whatIs-text__para2">
              During the event, participants will work in teams to develop
              innovative ideas that can solve real-world problems. They will be
              encouraged to use their creativity, technical skills, and critical
              thinking abilities to develop solutions that are both practical
              and effective.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHTS;
