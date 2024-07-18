"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const [HamBurger, setHamBurger] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nav.classList.add("nav--scrolled");
      } else {
        nav.classList.remove("nav--scrolled");
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
    <nav ref={navRef}>
      <Link href="/">
        <Image src="/logo-main.webp" alt="logo" width={170} height={70} />
      </Link>

      <button className="nav__toggle" onClick={toggleBurger}>
        <Image
          src={HamBurger ? "/close-64.png" : "/hamburger-48.png"}
          width={40}
          height={40}
          alt="toggle"
        />
      </button>

      <ul className={`nav__links ${HamBurger ? "nav__links--open" : ""}`}>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            History
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Sponsors
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Tracks
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Prizes
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Team
          </Link>
        </li>
        <li>
          <Link href="/" onClick={toggleBurger}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="mlh-flag">
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
      </div>
    </nav>
  );
};

export default Navbar;
