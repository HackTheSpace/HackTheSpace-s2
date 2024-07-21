import React, { useRef } from "react";
import VerticalBox from "./VerticalBox";
import HorizontalBox from "./HorizontalBox";
import Heading from "../Heading";
import { useInView } from "framer-motion";

const Tracks = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  console.log(inView);
  return (
    <section id="tracks" className="Track-section">
      <div className="heading">
        <h1 className="heading-shadow">TRACKS</h1>
        <Heading className="heading-small">TRACKS</Heading>
      </div>
      <div className="tracks-container">
        <div className="box-bundle" ref={ref}>
          <VerticalBox title={"Open Innovation"} img={"open.svg"} />

          <HorizontalBox
            title1={"Generative AI & Machine Learning"}
            title2={"Augmented & virtual reality"}
            inView={inView}
            img1={"AI - ML.svg"}
            img2={"/VR.svg"}
          />
        </div>

        <div className="box-bundle">
          <VerticalBox title={"Security & Audits"} img={"security.svg"} />

          <HorizontalBox
            title1={"Internet Of Things"}
            title2={"Cloud & Devops"}
            inView={inView}
            img1={"IOT.svg"}
            img2={"Cloud.svg"}
          />
        </div>

        <div className="box-bundle">
          <VerticalBox title={"Open Innovation"} img={"open.svg"} />
        </div>
      </div>
    </section>
  );
};

export default Tracks;
