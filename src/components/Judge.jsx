"use client";
import React from "react";
import { judges } from "@/config/team";
import TeamMember from "@/components/TeamMember";
import Heading from "./Heading";
import Image from "next/image";

const Judge = () => {
  return (
    <section className="team" id="judge">
      <Image
        src="/images/backgrounds/bg_1.jpg"
        alt="Background"
        fill
        quality={100}
        className=""
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "0",
          opacity: "0.23",
        }}
      />
      <div className="heading">
        <h1 className="heading-shadow">SPEAKERS</h1>
        <Heading className="heading-small">SPEAKERS & JUDGES</Heading>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "0",
          // width:",
        }}
      >
        {judges.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            position={member.position}
            imageSrc={member.imageSrc}
            socials={member.socials}
          />
        ))}
      </div>
    </section>
  );
};

export default Judge;
