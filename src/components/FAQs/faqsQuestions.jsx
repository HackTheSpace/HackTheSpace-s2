import React from "react";
import Image from "next/image";

const FAQsQuesComp = ({ Question, Answer, isOpen, handleToggle }) => {
  return (
    <div className="question--box">
      <div
        className={`question ${isOpen ? "active" : ""}`}
        onClick={() => {
          handleToggle();
        }}
      >
        <p>{Question}</p>
      </div>
      <Image
        src={"/down.png"}
        alt="arrow"
        width={100}
        height={100}
        className={`arow ${isOpen ? "arowUp" : ""}`}
        onClick={() => {
          handleToggle();
        }}
      ></Image>
      <p className={`answer ${isOpen ? "active" : ""}`}>{Answer}</p>
    </div>
  );
};

export default FAQsQuesComp;
