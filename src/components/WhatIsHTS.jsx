import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../styles/WhatIsHTS.css";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const WhatIsHTS = () => {
  return (
    <section className="whatIs--section">
      <Image
        src="/images/backgrounds/bg_1.jpg"
        alt="Background"
        layout="fill"
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
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.
            </Paragraph>
            <Paragraph className="whatIs-text__para2">
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.Inspired by the famous
              painting, HackTheSpace 2023: A Starry Night will enable you to
              channel your creative persona, pushing the bounds of imagination
              and possibility to ideate, innovate, and develop something truly
              out of the world.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHTS;
