"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const VerticalBox = ({ title, img }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  // const inView = true;

  const animation = {
    visible: {
      height: "100%",
      opacity: "80%",
      transition: { duration: 0.5, delay: 0.25 },
    },
  };

  return (
    <motion.div
      variants={animation}
      ref={ref}
      initial={{ height: "0%", opacity: "0%" }}
      animate={inView ? "visible" : ""}
      className="vertical-box tracks-box"
    >
      <Image src={img} width={110} height={110} alt="open" />
      <h3 className="text ">{title}</h3>
    </motion.div>
  );
};

export default VerticalBox;
