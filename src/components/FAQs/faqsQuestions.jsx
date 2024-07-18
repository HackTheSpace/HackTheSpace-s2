import React from 'react'
import Image from 'next/image';

const FAQsQuesComp = ({ Question, Answer, isOpen, handleToggle }) => {
  return (
    <div className="question--box">
      <button
        className={`question ${isOpen ? "active" : ""}`}
        onClick={() => {
          handleToggle();
        }}
      >
        <p>{ Question }</p>
        {/* <Image src="/down.png" alt='FAQ' width={25} height={25} /> */}
      </button>
      <p className={`answer ${isOpen ? "active" : ""}`}>
        { Answer }
      </p>
    </div>
  )
}

export default FAQsQuesComp