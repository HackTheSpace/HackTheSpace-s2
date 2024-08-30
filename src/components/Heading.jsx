"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Heading = ({ children, className }) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true });

  return (
    <h2 className={className} ref={body}>
      {Array.from(children).map((word, i) => (
        <Word key={`w_${i}`} custom={i} isInView={isInView}>
          {word === " " ? "\u00A0" : word}
        </Word>
      ))}
    </h2>
  );
};

const Word = ({ children, custom, isInView }) => {
  const headingAnimation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 * i,
      },
    }),
  };

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <motion.div
        custom={custom}
        variants={headingAnimation}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Heading;
