import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HorizontalBox = ({ title1, title2, inView, img1, img2 }) => {
  return (
    <AnimatePresence>
      {inView && (
        <div className="horizontal-container">
          <motion.div
            key="1"
            initial={{ rotate: 90 }}
            animate={{ rotate: 0, transition: { duration: 0.25, delay: 0.75 } }}
            className="horizontal-box tracks-box "
            style={{ transformOrigin: " top left", zIndex: 3 }}
          >
            <Image
              src={img1}
              alt="IOT"
              width={80}
              height={80}
              className="icon"
            />
            <h3 className="text">{title1}</h3>
          </motion.div>
          <motion.div
            key="2"
            initial={{ y: "-220%", rotate: -10 }}
            animate={{
              y: "0%",
              rotate: 0,

              transition: {
                duration: 0.3,
                delay: 1,
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 1,
              },
            }}
            className="horizontal-box tracks-box"
            style={{ zIndex: 1, transformOrigin: "bottom left" }}
          >
            <Image
              src={img2}
              alt="IOT"
              width={80}
              height={80}
              className="icon"
            />
            <h3 className="text">{title2}</h3>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default HorizontalBox;
