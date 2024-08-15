"use client";
import React, { useState } from "react";

import FAQsQuesComp from "./faqsQuestions";
import { faqsQuestions } from "../../config/questions";
import Heading from "../Heading";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const FAQsColComponent = ({ children }) => {
  return <div className="faqs--col">{children}</div>;
};

const FAQsSection = () => {
  const { data } = faqsQuestions;
  const [toggle, setToggle] = useState(null);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [40, 0]);

  return (
    <section ref={container} className="faqs--section" id="faqs">
      <Image
        src="/images/backgrounds/bg_3.jpg"
        alt="Background"
        width={4751}
        height={2952}
        quality={100}
        className="faqs--section__background"
      />

      <div className="sponsors--heading">
        <h1 className="title-shadow">FAQs</h1>
        <Heading className="section-title">FAQs</Heading>
      </div>

      <div className="faqs--questions">
        {data.map((q) => (
          <FAQsColComponent key={q.id}>
            {q.Questions.map((ques) => (
              <FAQsQuesComp
                key={ques.id}
                Question={ques.Q}
                Answer={ques.A}
                isOpen={toggle === ques.id}
                handleToggle={() =>
                  toggle === ques.id ? setToggle(null) : setToggle(ques.id)
                }
              />
            ))}
          </FAQsColComponent>
        ))}
      </div>
      <div className="end-background">
        <Image
          src="/images/footer/fbg.png"
          alt="Background"
          width={1540}
          height={649}
          quality={100}
          priority
          className="faq__background"
        />
        {/* <Image
          src="/images/footer/astro.png"
          alt="Background"
          width={540}
          height={549}
          objectFit="cover"
          quality={100}
          priority
          className="faq__background2"
        /> */}
      </div>
      {/* <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div> */}
    </section>
  );
};

export default FAQsSection;
