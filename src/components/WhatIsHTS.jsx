import React from "react";
import Image from "next/image";
// import WhatIsImage from './WhatIsImage'
import "../styles/WhatIsHTS.css";

const WhatIsHTS = () => {
  return (
    <section className="whatIs--section">
      <div className="whatIs--image">
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
            height={311}
            className="first"
          />
          <Image
            src="/s1-image.jfif"
            alt="s1-images"
            width={606.17}
            height={322}
            className="second"
          />
        </div>
      </div>
      <div className="whatIs-container">
        <div className="whatIs-image__container">
          <Image
            src="/moon.png"
            alt="moon"
            width={1036}
            height={1036}
            className="whatIs-main__image"
          />
        </div>

        <div className="whatIs-text__container">
          <div className="whatIs-text__main">
            <h1 className="whatIs-text__shadow">WHAT ?</h1>
            <h3 className="whatIs-text__heading">WHAT IS HACKTHESPACE ?</h3>
          </div>
          <div className="whatIs-text__para">
            <p className="whatIs-text__para1">
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.
            </p>
            <p className="whatIs-text__para2">
              Inspired by the famous painting, HackTheSpace 2023: A Starry Night
              will enable you to channel your creative persona, pushing the
              bounds of imagination and possibility to ideate, innovate, and
              develop something truly out of the world.Inspired by the famous
              painting, HackTheSpace 2023: A Starry Night will enable you to
              channel your creative persona, pushing the bounds of imagination
              and possibility to ideate, innovate, and develop something truly
              out of the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHTS;
