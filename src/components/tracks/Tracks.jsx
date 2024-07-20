import React from "react";
import VerticalBox from "./VerticalBox";
import HorizontalBox from "./HorizontalBox";
import Image from "next/image";

const Tracks = () => {
  return (
    <div className="Track-section">
      <div className="heading">
        <h1 className="heading-shadow">TRACKS</h1>
        <h2 className="heading-small ">TRACKS</h2>
      </div>
      <div className="tracks-container">
        <div className="box-bundle">
          <VerticalBox title={"Open Innovation"} img={"open.svg"} />

          <HorizontalBox
            title1={"Generative AI & Machine Learning"}
            title2={"Augmented & virtual reality"}
            img1={"AI - ML.svg"}
            img2={"/VR.svg"}
          />
        </div>

        <div className="box-bundle">
          <VerticalBox title={"Security & Audits"} img={"security.svg"} />

          <HorizontalBox
            title1={"Internet Of Things"}
            title2={"Cloud & Devops"}
            img1={"IOT.svg"}
            img2={"Cloud.svg"}
          />
        </div>

        <div className="box-bundle">
          <VerticalBox title={"Open Innovation"} img={"open.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
