import React, { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const PrizeBox = ({ prize }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const animation = {
    visible: {
      y: 0,
      opacity: 0.75,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={animation}
      initial={{ y: 100, opacity: 0, rotate: 10 }}
      animate={inView ? "visible" : ""}
      className="prize-box"
      ref={ref}
    >
      <div className="prizeBox-img">
        <Image src={prize.img} alt="Logo" width={247} height={60} />
      </div>
      {/* <Image src={prize.img} width={247} height={60} /> */}
      <h2>{prize.title}</h2>
      <p>{prize.para}</p>
      <a className="link" target="blank" href={prize.link}>
        view more
      </a>
    </motion.div>
  );
};

export default PrizeBox;
