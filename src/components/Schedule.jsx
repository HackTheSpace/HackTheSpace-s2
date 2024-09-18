"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { scheduleConfig } from "@/config/schedule";
import Heading from "@/components/Heading";
import Image from "next/image";

const Card = ({ id, time, period, content }) => {
  return (
    <div
      className="card"
      style={{
        alignItems: `
        ${id % 2 === 0 ? "flex-end" : "flex-start"}
      `,
      }}
    >
      <div className="card-content">
        <h1
          style={{
            color: `
        ${id % 2 === 0 ? "#B741DD" : "#7D00F2"}
        `,
          }}
        >
          {id}
        </h1>
        <div>
          <div className="time">
            <p>{time}</p>
            <p
              style={{
                color: `
        ${id % 2 === 0 ? "#B741DD" : "#7D00F2"}
        `,
              }}
            >
              {period}
            </p>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-95%"]);

  return (
    <section id="schedule" ref={targetRef} className="schedule-section">
      <div className="heading">
        <h1 className="heading-shadow">SCHEDULE</h1>
        <Heading className="heading-small">SCHEDULE</Heading>
      </div>
      <div className="horizontal-scroll">
        <hr />
        <Image
          src="/schedule-rocket.png"
          width={100}
          height={200}
          alt="Rocket"
          className="schedule-rocket"
        />
        <Image
          src="/images/backgrounds/bg_2.jpg"
          alt="Background"
          fill
          quality={100}
          className="venue-section__background"
        />
        <motion.div className="schedule" style={{ x }}>
          {scheduleConfig.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
