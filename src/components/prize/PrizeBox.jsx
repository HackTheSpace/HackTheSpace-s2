import React, { useRef } from "react";
import Image from "next/image";
import { useInView, motion, delay } from "framer-motion";

const PrizeBox = ({ prize }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const animation = {
    visible: {
      y: 0,
      opacity: 0.75,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };
  return (
    <motion.div
      variants={animation}
      initial={{ y: 200, opacity: 0 }}
      animate={inView ? "visible" : ""}
      className="prize-box"
      ref={ref}
    >
      <div className="prizeBox-img">
        <Image src={prize.img} width={247} height={60} />
      </div>
      {/* <Image src={prize.img} width={247} height={60} /> */}
      <h2>{prize.title}</h2>
      <p>{prize.para}</p>
    </motion.div>
  );
};

export default PrizeBox;
