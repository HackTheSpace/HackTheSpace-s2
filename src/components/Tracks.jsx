import React from "react";
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
          <div className="vertical-box tracks-box">
            <Image src="open.svg" width={110} height={110} alt="open" />
            <h3 className="text">Open inovation</h3>
          </div>
          <div className="horizontal-container">
            <div className="horizontal-box tracks-box">
              <Image
                src="AI - ML.svg"
                width={80}
                height={80}
                className="icon"
                alt="AI-ML"
              />
              <h3 className="text ">Generative AI & Machine Learning</h3>
            </div>
            <div className="horizontal-box tracks-box">
              <Image
                src="VR.svg"
                alt="VR"
                width={80}
                height={80}
                className="icon"
              />
              <h3 className="text">Augmented & Virtual reality</h3>
            </div>
          </div>
        </div>

        <div className="box-bundle">
          <div className="vertical-box tracks-box">
            <Image
              src="security.svg"
              alt="security"
              width={110}
              height={110}
              className="icon"
            />
            <h3 className="text">Security & Audits</h3>
          </div>
          <div className="horizontal-container">
            <div className="horizontal-box tracks-box">
              <Image
                src="IOT.svg"
                alt="IOT"
                width={80}
                height={80}
                className="icon"
              />
              <h3 className="text">Internet of Things</h3>
            </div>
            <div className="horizontal-box tracks-box">
              <Image
                src="Cloud.svg"
                alt="Cloud"
                width={80}
                height={80}
                className="icon"
              />
              <h3 className="text">Clouds & Devops</h3>
            </div>
          </div>
        </div>

        <div className="box-bundle">
          <div className="vertical-box tracks-box">
            <Image
              src="idea.svg"
              alt="idea"
              width={110}
              height={110}
              className="icon"
            />
            <h3 className="text">Open inovation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
