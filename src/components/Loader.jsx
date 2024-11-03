"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
  );
}
