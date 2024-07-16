import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1>HACK THE</h1>
        <div>
          <h1>SPACE</h1>
          <h1 className="outlined-text">2.0</h1>
        </div>
        <div className="hero-section__buttons" >
          <button >
            <Link href="/register">Devfolio</Link>
          </button>
          <button>
            <Link href="/register">Discord</Link>
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
