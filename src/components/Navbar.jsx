"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
};

const Navbar = () => {
  const navRef = useRef(null);
  const nanLinksRef = useRef(null);
  const [HamBurger, setHamBurger] = useState(false);

  const navAnimation = {
    initial: { y: "-100%" },
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBurger = () => {
    setHamBurger(!HamBurger);
  };

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

      <button className="nav__toggle" onClick={toggleBurger}>
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
          <Link href="#home" onClick={toggleBurger}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#aboutUS" onClick={toggleBurger}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Events
          </Link>
        </li>
        <li>
          <Link href="#tracks" onClick={toggleBurger}>
            Tracks
          </Link>
        </li>
        <li>
          <Link href="#faqs" onClick={toggleBurger}>
            Faqs
          </Link>
        </li>
        <li>
          <Link href="#footer" onClick={toggleBurger}>
            Contact
          </Link>
        </li>
      </ul>

      {/* <div className="mlh-flag">
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
      </div> */}
    </motion.nav>
  );
};

export default Navbar;
