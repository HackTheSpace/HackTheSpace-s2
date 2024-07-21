import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <section id="footer">
      <div className="border--container"></div>
      <footer className="footer--section">
        <div className="footer--logo">
          <Image src="/logo-main.webp" alt="HTS-logo" width={170} height={70} />
        </div>
        <div className="footer--docs">
          <h3 className="footer--title"> Explore </h3>
          <ul className="footer--docs__list">
            <li>
              <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                MLH code of conduct
              </Link>
            </li>
            <li>
              <Link href="https://s1.hackthespace.co/">Season 1.0</Link>
            </li>
            <li>
              <Link href="/Code of Conduct HTS.pdf">HTS - Rule Book</Link>
            </li>
          </ul>
        </div>
        <div className="footer--social">
          <div className="footer--social__handles">
            <h3 className="footer--title">Social Handles</h3>
            <div className="social--links">
              <Link href="https://instagram.com/hack.the.space" target="_blank">
                <GrInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/hackthespace/"
                target="_blank"
              >
                <GrLinkedin />
              </Link>
              <Link href="https://twitter.com/HackTheSpace_" target="_blank">
                <BsTwitterX />
              </Link>
              <Link href="https://discord.gg/FJKTSgdxPX" target="_blank">
                <IoLogoDiscord />
              </Link>
            </div>
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
      </footer>
      <div className="footer--team__HTS">
        <p>Made with ❤️ by the Team HackTheSpace2.0</p>
      </div>
    </section>
  );
};

export default Footer;
