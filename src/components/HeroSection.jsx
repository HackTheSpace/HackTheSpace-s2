import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="hero-section">
      <ThreeScene />
      <div className="hero-section__content">
        <h1>HACK THE</h1>
        <div>
          <h1>SPACE</h1>
          <h1 className="outlined-text">2.0</h1>
        </div>
        <div className="hero-section__buttons">
          <button>
            <Link href="/register">DEVFOLIO</Link>
          </button>
          <button>
            <Link href="/register">DISCORD</Link>
          </button>
        </div>
      </div>
      <Image
        src="/astronaut.svg"
        alt="Astronaut"
        width={500}
        height={500}
        className="hero-section__image"
      />
    </section>
  );
};

export default HeroSection;
