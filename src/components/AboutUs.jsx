import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="AboutUsDiv" id="aboutUS">
      <Image
        src="/astronaut2.svg"
        alt="Astronaut"
        width={500}
        height={500}
        className="hero-section__image"
      />
      <h1 className="heading1">ABOUT</h1>
      <Heading className="heading2">ABOUT US</Heading>

      <Heading className="heading3">WHO WE ARE</Heading>

      <div className="ParaDiv2">
        <Paragraph>
          We are active leaders &amp; passionate community builders who work
          towards a collective goal of strengthening the region to get all the
          tech enthusiasts and career aspirants equal opportunities and exposure
          as people in metro cities or all around the world get! We are
          determined to cultivate an ambiance where individuals can coact to
          create an inclusive environment to devise, grasp and develop
          solutions. Our motive is not only concerned with technical but also
          cultural development. As a team of aspirants we welcome growth as a
          part of our journey.
        </Paragraph>
      </div>
      <div className="ParaDiv2">
        <Paragraph>
          So, here we are, organizing the biggest hackathon of central India,
          with enormous amounts of opportunities and capabilities to level up
          the community reach of the region.
        </Paragraph>
      </div>
    </section>
  );
};

export default AboutUs;
