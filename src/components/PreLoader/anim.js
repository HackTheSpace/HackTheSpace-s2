export const fadeOut = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};

export const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.3,
    transition: {
      pathLength: { delay: 0.2, type: "spring", duration: 3.5, bounce: 0 },
      opacity: { delay: 0.2, duration: 1 },
    },
  },
};

export const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
    x: "-200px",
  },
  visible: {
    opacity: 1,
    pathLength: 0.5,
    x: "30px",
    transition: {
      pathLength: { delay: 0.8, type: "spring", duration: 3.5, bounce: 0 },
      opacity: { delay: 0.8, duration: 1 },
      x: { delay: 0.8, duration: 0.5, ease: "easeOut" },
    },
  },
};

export const icon3 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
    x: "-200px",
  },
  visible: {
    opacity: 1,
    x: "0px",
    pathLength: 0.22,
    transition: {
      pathLength: { delay: 1.5, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: 1.5, duration: 1 },
      x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
    },
  },
};

export const anim = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 0.9,
    x: "-2%",
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    scale: 4,
    y: "-500%",
    x: "5%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const special = {
  rotateX: 90,
  transition: { duration: 0.4 },
};

export const svgAnimate = {
  y: "-100%",
  opacity: 0,
  transition: { duration: 0.4 },
};

export const animatedText = {
  opacity: 1,
  transition: { duration: 0.4 },
};
