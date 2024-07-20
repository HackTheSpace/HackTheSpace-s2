import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const AboutUs = () => {
  return (
    <section
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="AboutUsDiv">
        <h1 className="heading1">ABOUT</h1>
        <Heading className="heading2">{["ABOUT", " ", "US"]}</Heading>

        <Heading className="heading3">{["WHO", " ", "WE", " ", "ARE"]}</Heading>

        <div className="ParaDiv1">
          <Paragraph>
            Inspired by the famous painting, HackTheSpace 2023: A Starry Night
            will enable you to channel your creative persona, pushing the bounds
          </Paragraph>
        </div>
        <div className="ParaDiv2">
          <Paragraph>
            Inspired by the famous painting, HackTheSpace 2023: A Starry Night
            will enable you to channel your creative persona, pushing the bounds
            of imagination and possibility to ideate, innovate, and develop
            something truly out of the world.Inspired by the famous painting,
            HackTheSpace 2023: A Starry Night will enable you to channel your
            creative persona, pushing the bounds of imagination and possibility
            to ideate, innovate, and develop something truly out of the world.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
