"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

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

  return (
    <nav ref={navRef}>
      <Link href="/">
        <Image src="/logo-main.webp" alt="logo" width={170} height={70} />
      </Link>
      <div className="nav__links">
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">History</Link>
        <Link href="/">Sponsors</Link>
        <Link href="/">Tracks</Link>
        <Link href="/">Prizes</Link>
        <Link href="/">Team</Link>
        <Link href="/">Contact</Link>
      </div>
      <div>
        <Link
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: "100px",
            minWidth: "60px",
            position: "fixed",
            right: "50px",
            top: "0",
            width: "10%",
            zIndex: "10000",
          }}
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
