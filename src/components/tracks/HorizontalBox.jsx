"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const HorizontalBox = ({ title1, title2, img1, img2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  // const inView = true;
  const animation = {
    visible: {
      rotate: 0,
      x: 0,
      transition: { duration: 0.5, delay: 1 },
    },
    rotate: {
      y: 0,
      rotate: 0,

      transition: {
        duration: 0.3,
        delay: 1.5,
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      },
    },
  };
  return (
    <div className="horizontal-container" ref={ref}>
      <motion.div
        key="1"
        variants={animation}
        ref={ref}
        initial={{ rotate: 90, x: 1 }}
        animate={inView ? "visible" : ""}
        className="horizontal-box tracks-box "
        style={{ transformOrigin: " top left", zIndex: 3 }}
      >
        <Image src={img1} alt="img" width={80} height={80} className="icon" />
        <h3 className="text">{title1}</h3>
      </motion.div>
      <motion.div
        key="2"
        variants={animation}
        initial={{ y: -310, rotate: -10 }}
        animate={inView ? "rotate" : ""}
        className="horizontal-box tracks-box"
        style={{ zIndex: 2, transformOrigin: "bottom left" }}
      >
        <Image src={img2} alt="img" width={80} height={80} className="icon" />
        <h3 className="text">{title2}</h3>
      </motion.div>
    </div>
  );
};
export default HorizontalBox;
