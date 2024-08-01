"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";

const Navbar = () => {
  const navRef = useRef(null);
  const nanLinksRef = useRef(null);
  const [HamBurger, setHamBurger] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    setHamBurger(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
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
      } else {
        nav.classList.remove("nav--scrolled");
        navLinks.classList.remove("nav__links--scrolled");
        document.getElementById("logo").style.display = "block";
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
    };
  }, []);

  return (
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

      <button className="nav__toggle" onClick={() => setHamBurger(!HamBurger)}>
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
          <Link href="#home" onClick={handleScroll}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#aboutUS" onClick={handleScroll}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="#tracks" onClick={handleScroll}>
            Tracks
          </Link>
        </li>
        <li>
          <Link href="#events" onClick={handleScroll}>
            Events
          </Link>
        </li>
        <li>
          <Link href="#faqs" onClick={handleScroll}>
            Faqs
          </Link>
        </li>
        <li>
          <Link href="#footer" onClick={handleScroll}>
            Contact
          </Link>
        </li>
        <li className="sponsor-us">
          <Link href="https://bit.ly/HTS-SU" target="https://bit.ly/HTS-SU">
            Sponsor Us
          </Link>
        </li>
      </ul>

      <Link
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
      </Link>
    </motion.nav>
  );
};

export default Navbar;
