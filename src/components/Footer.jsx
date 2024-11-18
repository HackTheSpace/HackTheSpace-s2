"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <>
      <div className="border--container"></div>
      <motion.footer
        style={{ y }}
        ref={container}
        className="footer--section"
        id="footer"
      >
        <div className="footer--docs">
          <h3 className="footer--title"> Explore </h3>
          <ul className="footer--docs__list">
            <li>
              <Link href="https://s1.hackthespace.co/" target="_blank">
                Season 1.0
              </Link>
            </li>
            <li>
              <Link href="https://s2.hackthespace.co" target="_blank">
                Season 2.0
              </Link>
            </li>
            <li>
              <Link href="/code-of-conduct-HTS.pdf" target="_blank">
                HTS - Rule Book
              </Link>
            </li>
            <li>
              <Link
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
              >
                MLH code of conduct
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--logo">
          <Image src="/logo-main.webp" alt="HTS-logo" width={170} height={70} />
          <p>THINK. BUILD. LAUNCH</p>
          <div className="social--links">
            <Link href="mailto:support@hackthespace.co" target="_blank">
              <MdEmail />
            </Link>
            <Link href="https://discord.gg/FJKTSgdxPX" target="_blank">
              <IoLogoDiscord />
            </Link>
            <Link href="https://twitter.com/HackTheSpace_" target="_blank">
              <BsTwitterX />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCWPOEhjt6OxWrhlzsqq8KVg"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com/hack.the.space" target="_blank">
              <GrInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/hackthespace/"
              target="_blank"
            >
              <GrLinkedin />
            </Link>
          </div>
        </div>
        <div className="footer--contact">
          <h3 className="footer--title">Contact Us</h3>
          <div className="contact--list">
            <Link href="mailto:support@hackthespace.co" target="_blank">
              support@hackthespace.co
            </Link>
          </div>
        </div>
      </motion.footer>
      <div className="footer--team__HTS">
        <p>Made with ❤️ by the Team HackTheSpace</p>
      </div>
    </>
  );
};

export default Footer;
