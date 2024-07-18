export const fadeOut = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};

export const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.3,
    fill: "rgba(255, 255, 255, 0)",
  },
};

export const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.5,
    fill: "rgba(255, 255, 255, 0)",
  },
};

export const icon3 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.22,
    fill: "rgba(255, 255, 255, 0)",
  },
};

export const anim = {
  initial: {
    scale: 6,
    x: "-30%",
  },
  animate: {
    scale: 0.65,
    x: "-4%",
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
  exit: {
    scale: 1.65,
    transition: {
      duration: 1.5,
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
