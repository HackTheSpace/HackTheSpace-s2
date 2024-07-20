import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
const VerticalBox = ({ title, img }) => {
  // const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      height: "100%",
      opacity: 1,
      transition: { duration: 0.25 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ height: "0%", opacity: 0 }}
      // animate={{ height: "100%", controls }}
      animate={controls}
      // transition={{ duration: 0.25 }}

      className="vertical-box tracks-box"
    >
      <Image src={img} width={110} height={110} alt="open" />
      <h3 className="text ">{title}</h3>
    </motion.div>
  );
};

export default VerticalBox;
