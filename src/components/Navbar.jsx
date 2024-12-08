"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const navRef = useRef(null);
  const nanLinksRef = useRef(null);
  const [HamBurger, setHamBurger] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (location) => {
    setHamBurger(false);

    if (pathname === "/") {
      const element = document.querySelector(location);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
        history.pushState(null, "", location);
      }
    } else {
      router.push(`/${location}`);
    }
  };

  const navAnimation = {
    initial: { y: "-200%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 5,
      },
    },
  };

  useEffect(() => {
    const nav = navRef.current;
    const navLinks = nanLinksRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nav.classList.add("nav--scrolled");
        navLinks.classList.add("nav__links--scrolled");
        document.getElementById("logo").style.display = "none";
        document.getElementById("upButton").style.opacity = "1";
      } else {
        nav.classList.remove("nav--scrolled");
        navLinks.classList.remove("nav__links--scrolled");
        document.getElementById("logo").style.display = "block";
        document.getElementById("upButton").style.opacity = "0";
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setHamBurger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial="initial"
        animate="animate"
        variants={navAnimation}
      >
        <Link href="/">
          <Image
            id="logo"
            src="/logo-main.webp"
            alt="logo"
            width={130}
            height={55}
          />
        </Link>

        <button
          className="nav__toggle"
          onClick={() => setHamBurger(!HamBurger)}
        >
          <Image
            src={HamBurger ? "/close-64.png" : "/hamburger-48.png"}
            width={40}
            height={40}
            alt="toggle"
            id="hamburger"
          />
        </button>

        <ul
          ref={nanLinksRef}
          className={`nav__links ${HamBurger ? "nav__links--open" : ""}`}
        >
          <li>
            <span onClick={() => handleScroll("#home")}>Home</span>
          </li>
          <li>
            <span onClick={() => handleScroll("#aboutUS")}>About Us</span>
          </li>
          <li>
            <span onClick={() => handleScroll("#judge")}>
              Speakers & judges
            </span>
          </li>
          {/* <li>
            <span onClick={() => handleScroll("#venue")}>Venue</span>
          </li>
          <li>
            <span onClick={() => handleScroll("#schedule")}>Schedule</span>
          </li>
          <li>
            <span onClick={() => handleScroll("#prizes")}>Prizes</span>
          </li> */}
          {/* <li>
            <span onClick={() => handleScroll("#tracks")}>Tracks</span>
          </li> */}
          {/* <li>
          <span onClick={() => handleScroll("#events")}>Events</span>
        </li> */}
          <li>
            <Link href="/partners" onClick={() => setHamBurger(false)}>
              Partners
            </Link>
          </li>
          <li>
            <Link href="/organizers" onClick={() => setHamBurger(false)}>
              Organizers
            </Link>
          </li>
          {/* <li>
            <span onClick={() => handleScroll("#faqs")}>Faqs</span>
          </li> */}
          <li>
            <span onClick={() => handleScroll("#footer")}>Contact</span>
          </li>
          {/* <li className="sponsor-us">
            <div className="line-wrapper">
              <div className="card-line"></div>
            </div>
            <Link href="https://bit.ly/HTS-SU" target="https://bit.ly/HTS-SU">
              Sponsor Us
            </Link>
          </li> */}
        </ul>

        {/* <Link
          id="mlh-trust-badge"
          href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
          target="_blank"
        >
          <Image
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
            alt="Major League Hacking 2025 Hackathon Season"
            width={100}
            height={170}
          />
        </Link> */}
      </motion.nav>
      <div>
        <div
          id="upButton"
          className="goToTop"
          onClick={() => handleScroll("#home")}
        >
          {" "}
          <div className="line-wrapper">
            <div className="card-line"></div>
          </div>
          <div
            style={{
              background: "black",
              zIndex: 4,

              borderRadius: "40px",
              padding: "0.7rem",
            }}
          >
            <Image src={"/down.png"} width={100} height={100} alt=""></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
