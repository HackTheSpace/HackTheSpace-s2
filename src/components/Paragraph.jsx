"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function Paragrapgh({ children }) {
  const description = useRef(null);

  const isInView = useInView(description, { once: true });

  const slideUp = {
    initial: {
      y: "100%",
    },

    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),

    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <p ref={description}>
      {children.split(" ").map((word, index) => {
        return (
          <span key={index}>
            <motion.span
              variants={slideUp}
              custom={index}
              animate={isInView ? "open" : "closed"}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
