"use client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import Trophy from "./Trophy";
import Prizebox from "./PrizeBox";
import { prizeData } from "../../config/trackPrize";

const Prize = () => {
  return (
    <section className="Prize-section">
      <Image
        src="/images/backgrounds/bg_1.jpg"
        alt="Background"
        fill
        quality={100}
        className="prize-background"
      />
      <div className="heading">
        <h1 className="heading-shadow">PRIZES</h1>
        <Heading className="heading-small">PRIZES</Heading>
      </div>
      <div className="trophy-container">
        <Trophy
          amount={"10k"}
          title={"First Runner-Up"}
          rank={"2"}
          ranksub={"nd"}
        />
        <Trophy amount={"20k"} title={"Winner"} rank={"1"} ranksub={"st"} />
        <Trophy
          amount={"5k"}
          title={"Second Runner-Up"}
          rank={"3"}
          ranksub={"rd"}
        />
      </div>
      <div className="spetial-prize">
        <div className="spetial-prize-container">
          <Image src="/girls.svg" alt="svg" height={228} width={169} />
          <h1 className="spetial-amount">₹2500/-</h1>
          <p className="tag">Best All Girls Team</p>
        </div>
        <div className="spetial-prize-container">
          <Image src="/beginner.svg" alt="svg" height={228} width={122} />
          <h1 className="spetial-amount">₹2500/-</h1>
          <p className="tag">Best Beginner Team</p>
        </div>
      </div>
      <h2 className="sponsors--head__title">TRACK PRIZES</h2>
      <div className="track-prize">
        {prizeData.prizes.map((e, i) => (
          <Prizebox prize={e} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Prize;
