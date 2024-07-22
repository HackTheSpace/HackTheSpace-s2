"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import {
  fadeOut,
  icon,
  icon2,
  icon3,
  anim,
  special,
  svgAnimate,
  animatedText,
} from "./anim";
import Image from "next/image";

export default function Index() {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  // const [rocket, animate4] = useAnimate();

  const myAnimation = async () => {
    animate(scope.current, special);
    animate("svg", svgAnimate);
    animate("p", animatedText);
    // animate(
    //   scope.current,
    //   {
    //     x: "200vw",
    //   },
    //   {
    //     duration: 0.8,
    //     delay: 1.4,
    //     ease: "easeOut",
    //   }
    // );

    // animate4(
    //   rocket.current,
    //   {
    //     rotateY: 720,
    //   },
    //   {
    //     ease: "easeInOut",
    //     duration: 1,
    //   }
    // );
    // animate4(
    //   rocket.current,
    //   {
    //     x: "0",
    //     y: "-200vh",
    //   },
    //   {
    //     duration: 1,
    //     delay: 1.2,
    //     ease: "easeOut",
    //   }
    // );
  };

  const myAnimation2 = async () => {
    animate2(scope2.current, special);
    animate2("svg", svgAnimate);
    animate2("p", animatedText);
    // animate2(
    //   scope2.current,
    //   {
    //     x: "200vw",
    //   },
    //   {
    //     duration: 0.8,
    //     delay: 1,
    //     ease: "easeOut",
    //   }
    // );
  };

  const myAnimation3 = async () => {
    animate3(scope3.current, special);
    animate3("svg", svgAnimate);
    animate3("p", animatedText);
    // animate3(
    //   scope3.current,
    //   {
    //     x: "-200vw",
    //   },
    //   {
    //     duration: 0.8,
    //     delay: 0.6,
    //     ease: "easeOut",
    //   }
    // );
  };

  useEffect(() => {
    const timeouts = [
      setTimeout(() => myAnimation(), 2600),
      setTimeout(() => myAnimation2(), 2900),
      setTimeout(() => myAnimation3(), 3100),
    ];

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <motion.section
      variants={fadeOut}
      initial="initial"
      exit="exit"
      className="preloader"
    >
      <motion.div
        variants={anim}
        initial="initial"
        animate="animate"
        exit="exit"
        className="preloader__content"
      >
        <div className="preloader__text">
          {/* HACK */}
          <div className="special" ref={scope}>
            <motion.svg
              viewBox="0 0 281 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="item"
            >
              <motion.path
                d="M0.598633 128V1.67188H25.7207V46.8198H37.6357V1.67188H62.7578V128H37.6357V70.7217H25.7207V128H0.598633ZM70.5098 128L82.7119 1.67188H125.563L137.55 128H113.648L111.854 107.615H96.6367L95.0576 128H70.5098ZM98.4312 87.4458H109.916L104.389 23.2051H103.24L98.4312 87.4458ZM174.73 129.148C165.591 129.148 158.222 126.301 152.623 120.607C147.072 114.913 144.297 106.945 144.297 96.7051V38.4219C144.297 26.1719 146.713 16.793 151.546 10.2852C156.427 3.77734 164.347 0.523438 175.305 0.523438C181.286 0.523438 186.598 1.62402 191.239 3.8252C195.929 6.02637 199.613 9.32813 202.293 13.7305C204.973 18.085 206.312 23.5879 206.312 30.2393V52.0596H181.19V33.3975C181.19 29.6172 180.712 27.0811 179.755 25.7891C178.798 24.4492 177.314 23.7793 175.305 23.7793C172.96 23.7793 171.381 24.6406 170.567 26.3633C169.754 28.0381 169.347 30.2871 169.347 33.1104V96.3462C169.347 99.8394 169.85 102.304 170.854 103.739C171.907 105.175 173.391 105.893 175.305 105.893C177.458 105.893 178.965 105.007 179.827 103.237C180.736 101.466 181.19 99.1694 181.19 96.3462V73.5928H206.6V97.4946C206.6 108.596 203.8 116.659 198.202 121.684C192.603 126.66 184.779 129.148 174.73 129.148ZM215.069 128V1.67188H240.048V52.2749L251.819 1.67188H277.229L263.088 59.5244L280.171 128H253.973L240.191 66.8457V128H215.069Z"
                fill="white"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 3, ease: "easeInOut" },
                  fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
            <motion.p className="animated__text">THINK</motion.p>
          </div>

          {/* THE */}
          <div className="special" ref={scope2}>
            <motion.svg
              viewBox="0 0 281 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="item"
            >
              <motion.path
                d="M15.437 127V24.9326H0.435547V0.671875H55.7041V24.9326H40.7026V127H15.437ZM62.7383 127V0.671875H87.8604V45.8198H99.7754V0.671875H124.897V127H99.7754V69.7217H87.8604V127H62.7383ZM136.095 127V0.671875H186.626V25.0762H161.791V49.6958H185.621V73.4541H161.791V102.38H188.277V127H136.095Z"
                fill="white"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 3, ease: "easeInOut" },
                  fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
            <p className="animated__text">BUILD</p>
          </div>
          {/* SPACE */}
          <div className="special" ref={scope3}>
            <motion.svg
              viewBox="0 0 281 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="item"
            >
              <motion.path
                d="M32.6016 129.148C21.0693 129.148 12.7432 126.277 7.62305 120.535C2.55078 114.793 0.0146484 105.653 0.0146484 93.1162V80.7705H24.9932V96.5615C24.9932 99.4805 25.4238 101.777 26.2852 103.452C27.1943 105.079 28.7495 105.893 30.9507 105.893C33.2476 105.893 34.8267 105.223 35.688 103.883C36.5972 102.543 37.0518 100.342 37.0518 97.2793C37.0518 93.4033 36.6689 90.1733 35.9033 87.5894C35.1377 84.9575 33.7979 82.4692 31.8838 80.1245C30.0176 77.7319 27.4097 74.9565 24.0601 71.7983L12.7192 61.0317C4.24951 53.0405 0.0146484 43.9009 0.0146484 33.6128C0.0146484 22.8462 2.50293 14.6396 7.47949 8.99316C12.5039 3.34668 19.7534 0.523438 29.228 0.523438C40.8081 0.523438 49.0146 3.60986 53.8477 9.78271C58.7285 15.9556 61.1689 25.3345 61.1689 37.9194H35.4727V29.2344C35.4727 27.5117 34.9702 26.1719 33.9653 25.2148C33.0083 24.2578 31.6924 23.7793 30.0176 23.7793C28.0078 23.7793 26.5244 24.3535 25.5674 25.502C24.6582 26.6025 24.2036 28.0381 24.2036 29.8086C24.2036 31.5791 24.6821 33.4932 25.6392 35.5508C26.5962 37.6084 28.4863 39.9771 31.3096 42.6567L45.8804 56.6533C48.7993 59.4287 51.479 62.3716 53.9194 65.4819C56.3599 68.5444 58.3218 72.1333 59.8052 76.2485C61.2886 80.3159 62.0303 85.2925 62.0303 91.1782C62.0303 103.045 59.8291 112.353 55.4268 119.1C51.0723 125.799 43.4639 129.148 32.6016 129.148ZM70.5 128V1.67188H103.876C110.863 1.67188 116.39 3.22705 120.457 6.3374C124.572 9.44775 127.515 13.874 129.286 19.6162C131.056 25.3584 131.941 32.2012 131.941 40.1445C131.941 47.8008 131.2 54.4761 129.716 60.1704C128.233 65.8169 125.577 70.1953 121.749 73.3057C117.969 76.416 112.585 77.9712 105.599 77.9712H95.335V128H70.5ZM95.335 55.2896H96.7705C101.46 55.2896 104.331 53.9736 105.384 51.3418C106.437 48.71 106.963 44.834 106.963 39.7139C106.963 34.9287 106.437 31.2441 105.384 28.6602C104.379 26.0283 101.962 24.7124 98.1343 24.7124H95.335V55.2896ZM134.382 128L146.584 1.67188H189.435L201.422 128H177.52L175.726 107.615H160.509L158.93 128H134.382ZM162.303 87.4458H173.788L168.261 23.2051H167.112L162.303 87.4458ZM238.603 129.148C229.463 129.148 222.094 126.301 216.495 120.607C210.944 114.913 208.169 106.945 208.169 96.7051V38.4219C208.169 26.1719 210.585 16.793 215.418 10.2852C220.299 3.77734 228.219 0.523438 239.177 0.523438C245.158 0.523438 250.47 1.62402 255.111 3.8252C259.801 6.02637 263.485 9.32813 266.165 13.7305C268.845 18.085 270.185 23.5879 270.185 30.2393V52.0596H245.062V33.3975C245.062 29.6172 244.584 27.0811 243.627 25.7891C242.67 24.4492 241.187 23.7793 239.177 23.7793C236.832 23.7793 235.253 24.6406 234.439 26.3633C233.626 28.0381 233.219 30.2871 233.219 33.1104V96.3462C233.219 99.8394 233.722 102.304 234.727 103.739C235.779 105.175 237.263 105.893 239.177 105.893C241.33 105.893 242.837 105.007 243.699 103.237C244.608 101.466 245.062 99.1694 245.062 96.3462V73.5928H270.472V97.4946C270.472 108.596 267.672 116.659 262.074 121.684C256.475 126.66 248.651 129.148 238.603 129.148ZM278.941 128V1.67188H329.473V26.0762H304.638V50.6958H328.468V74.4541H304.638V103.38H331.124V128H278.941Z"
                fill="white"
                variants={icon3}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 3, ease: "easeInOut" },
                  fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
            <p className="animated__text">LAUNCH</p>
          </div>
        </div>

        {/* <div className="preloader__text">
           <Image
            src="/rocket.png"
            alt="rocket"
            width={100}
            height={100}
            className="rocket"
            ref={rocket}
            initial="initial"
            animate="animate"
          /> 
        </div> */}
      </motion.div>
    </motion.section>
  );
}
