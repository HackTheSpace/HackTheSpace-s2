import React, { useRef } from "react";
import VerticalBox from "./VerticalBox";
import HorizontalBox from "./HorizontalBox";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { useInView } from "framer-motion";

const Tracks = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  // console.log(inView);
  return (
    <section id="tracks" className="Track-section">
      <div className="heading">
        <h1 className="heading-shadow">TRACKS</h1>
        <Heading className="heading-small">TRACKS</Heading>
      </div>
      <div className="tracks-para">
        <Paragraph>
          tracks HackTheSpace features a variety of tracks, each designed to
          guide hackers to tackle specific challenges. By offering diverse
          tracks, we cater to a wide range of interests and expertise, fostering
          creativity, collaboration, and meaningful innovation among hackers.
        </Paragraph>
        <Paragraph>
          HackTheSpace is not just an event; it is a chance to Think, Build and
          Launch. With diverse tracks covering cutting-edge tech, there is
          something for everyone, from experts to newcomers. Join us on this
          journey of discovery and problem-solving. Lets unleash tech full
          potential and make a lasting impact.
        </Paragraph>
      </div>
      <div className="tracks-container">
        <div className="box-bundle" ref={ref}>
          <HorizontalBox
            title1={"Open Innovation"}
            title2={"Security & Audits"}
            inView={true}
            img1={"open.svg"}
            img2={"security.svg"}
          />
          <HorizontalBox
            title1={"Generative AI & Machine Learning"}
            title2={"Augumented & Vertual Reality "}
            inView={true}
            img1={"AI - ML.svg"}
            img2={"VR.svg"}
          />
        </div>
        <div className="box-bundle" ref={ref}>
          <HorizontalBox
            title1={"Internet Of Things"}
            title2={"Cloud & Devops"}
            inView={true}
            img1={"IOT.svg"}
            img2={"Cloud.svg"}
          />
          <VerticalBox title={"Open Innovation"} img={"idea.svg"} />
        </div>
      </div>
    </section>
  );
};

export default Tracks;
