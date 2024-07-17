"use client"
import React, { useState } from 'react'

import FAQsQuesComp from './faqsQuestions';
import { faqsQuestions } from "../../config/questions"

const FAQsColComponent = ({ children }) => {
    return <div className="faqs--col">
      { children }
    </div>;
  };

const FAQsSection = () => {
    const { data } = faqsQuestions;
    const [toggle, setToggle] = useState(null);

  return (
    <section className='faqs--section'>
        <div className='faqs--text'>
          <div className='faqs--text__container'>
            <h1 className='faqs--text__shadow'>FAQs</h1>
            <h3 className='faqs--text__heading'>FAQs</h3>
          </div>
        </div>
        <div className='faqs--questions'>
            {data.map((q) => (
              <FAQsColComponent key={q.id}>
                {q.Questions.map((ques) => (
                  <FAQsQuesComp key={ques.id} 
                  Question={ques.Q}
                  Answer={ques.A}
                  isOpen={toggle === ques.id}
                  handleToggle={() => toggle === ques.id ? setToggle(null) : setToggle(ques.id)} />
              ))}
              </FAQsColComponent>
            ))}
        </div>
    </section>
  )
}

export default FAQsSection