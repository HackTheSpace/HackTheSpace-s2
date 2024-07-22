import React from "react";
import Image from "next/image";
import "../styles/WhatIsHTS.css";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const WhatIsHTS = () => {
  return (
    <section className="whatIs--section">
      {/* <div className="whatIs--image">
        <Image
          src="/s1-image.jfif"
          alt="s1-images"
          width={442}
          height={654}
          className="whatIs-image__1"
        />

        <div className="whatIs-image__2">
          <Image
            src="/s1-image.jfif"
            alt="s1-images"
            width={575}
            height={322}
          />
          <Image
            src="/s1-image.jfif"
            alt="s1-images"
            width={606.17}
            height={322}
          />
        </div>
      </div> */}
      <div className="whatIs-container">
        {/* <div className="whatIs-image__container"> */}
        <Image
          src="/moon.png"
          alt="moon"
          width={1036}
          height={1036}
          className="whatIs-moon__image"
        />
        {/* </div> */}

        <div className="whatIs-text__container">
          <div className="whatIs-text__main">
            <h1 className="whatIs-text__shadow">WHAT ?</h1>
            <Heading className="whatIs-text__heading">
              WHAT IS HACKTHESPACE ?
            </Heading>
          </div>
          <div className="whatIs-text__para">
            <Paragraph className="whatIs-text__para1">
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.
            </Paragraph>
            <Paragraph className="whatIs-text__para2">
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.Inspired by the famous
              painting, HackTheSpace 2023: A Starry Night will enable you to
              channel your creative persona, pushing the bounds of imagination
              and possibility to ideate, innovate, and develop something truly
              out of the world.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHTS;
