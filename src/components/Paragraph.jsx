import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Paragraph = ({ children, className }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.25"],
  });

  const words = children.split(" ");
  return (
    <p ref={container} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
