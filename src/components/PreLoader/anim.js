export const fadeOut = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
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
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.3,
    // transition: {
    //   pathLength: { delay: 2, type: "spring", duration: 6.5, bounce: 0 },
    //   opacity: { delay: 2, duration: 1 },
    // },
  },
};

export const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.5,
    // transition: {
    //   pathLength: { delay: 2, type: "spring", duration: 6.5, bounce: 0 },
    //   opacity: { delay: 2, duration: 1 },
    // },
  },
};

export const icon3 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 0.22,
    // transition: {
    //   pathLength: { delay: 2, type: "spring", duration: 6.5, bounce: 0 },
    //   opacity: { delay: 2, duration: 1 },
    // },
  },
};

export const anim = {
  initial: {
    scale: 6,
    opacity: 0,
  },
  animate: {
    scale: 0.65,
    x: "-4%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    scale: 1.65,
    opacity: 0,
    transition: {
      duration: 1.3,
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
