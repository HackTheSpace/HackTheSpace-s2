"use client";

import React, { useEffect, useRef, useState } from "react";
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
        <div>
          <span></span>
        </div>
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

  const [progress, setProgress] = useState(0);
  console.log(progress);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  const lg = useTransform(scrollYProgress, [0, 1], ["0", "200%"]);

  useEffect(() => {
    lg.onChange((v) => {
      setProgress(v);
    });
  }, []);

  return (
    <section id="schedule" ref={targetRef} className="schedule-section">
      <div className="heading">
        <h1 className="heading-shadow">SCHEDULE</h1>
        <Heading className="heading-small">SCHEDULE</Heading>
      </div>
      <div className="horizontal-scroll">
        <hr />
        <motion.div
          className="schedule-rocket"
          style={{
            x: lg,
          }}
        >
          <Image
            src="/schedule-rocket2.png"
            width={250}
            height={250}
            alt="Rocket"
            quality={100}
          />
        </motion.div>
        <Image
          src="/images/backgrounds/bg_2.jpg"
          alt="Background"
          fill
          quality={100}
          className="venue-section__background"
        />
        <h1 className="Day">
          {parseInt(progress) > 130 ? "Day 2" : "Day 1"}{" "}
          <span>{parseInt(progress) > 130 ? "Saturday" : "Friday"}</span>
        </h1>
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
