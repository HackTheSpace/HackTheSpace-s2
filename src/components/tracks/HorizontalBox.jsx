import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const HorizontalBox = ({
  title1,
  title2,

  img1,
  img2,
}) => {
  const control1 = useAnimation();
  const control2 = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      await control1.start({
        rotate: 0,
        x: 0,
        transition: { duration: 0.25, delay: 0.5 },
      });

      setTimeout(() => {
        control2.start({
          y: "0%",
          rotate: -10,
          transition: {
            duration: 0.3,

            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 1,
          },
        });
      }, 50);

      setTimeout(() => {
        control2.start({
          rotate: 0,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 1,
          },
        });
      }, 200);
    };

    animateSequence();
  }, [control1, control2]);

  return (
    <div className="horizontal-container">
      <motion.div
        initial={{ rotate: 90 }} // Start off-screen to the right and invisible
        animate={control1} // Animate to its final position and become visible
        className="horizontal-box tracks-box "
        style={{ transformOrigin: " top left", zIndex: 3 }}
      >
        <Image src={img1} alt="IOT" width={80} height={80} className="icon" />
        <h3 className="text">{title1}</h3>
      </motion.div>
      <motion.div
        initial={{ y: "-220%", rotate: 0 }} // Start off-screen to the right and invisible
        animate={control2} // Animate to its final position and become visible
        className="horizontal-box tracks-box"
        style={{ zIndex: 1, transformOrigin: "bottom left" }}
      >
        <Image src={img2} alt="IOT" width={80} height={80} className="icon" />
        <h3 className="text">{title2}</h3>
      </motion.div>
    </div>
  );
};
export default HorizontalBox;
