"use client"
import React, { useEffect, useState, useRef } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds

  useEffect(() => {
    const calculateTargetDate = () => {
    const targetDate = new Date(2024, 8, 27, 10, 30, 0);
        return targetDate;
    };

    // Check if there's already a saved countdown target in localStorage
    let targetDate = localStorage.getItem("targetDate");
    const currentTime = new Date().getTime();

    if (targetDate) {
      targetDate = new Date(parseInt(targetDate));
      // If the saved date is in the past, reset the countdown for 7 more days
      if (targetDate.getTime() < currentTime) {
        targetDate = calculateTargetDate();
        localStorage.setItem("targetDate", targetDate.getTime());
      }
    } else {
      targetDate = calculateTargetDate();
      localStorage.setItem("targetDate", targetDate.getTime());
    }

    const interval = setInterval(() => {
      const newTimeLeft = Math.ceil((targetDate.getTime() - new Date().getTime()) / 1000);
      setTimeLeft(newTimeLeft);
      flipAllCards(newTimeLeft);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const flipAllCards = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / (3600 * 24));

    flip("[data-days-tens]", Math.floor(days / 10));
    flip("[data-days-ones]", days % 10);
    flip("[data-hours-tens]", Math.floor(hours / 10));
    flip("[data-hours-ones]", hours % 10);
    flip("[data-minutes-tens]", Math.floor(minutes / 10));
    flip("[data-minutes-ones]", minutes % 10);
    flip("[data-seconds-tens]", Math.floor(seconds / 10));
    flip("[data-seconds-ones]", seconds % 10);
  };

  const flip = (selector, newNumber) => {
    const flipCard = document.querySelector(selector);
    if (!flipCard) return;

    const topHalf = flipCard.querySelector(".top");
    const bottomHalf = flipCard.querySelector(".bottom");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topFlip.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", () => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", () => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });

    flipCard.append(topFlip, bottomFlip);
  };

  return (
    <div className="countdown">
      <div className="flip-card" data-days-tens >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <div className="flip-card" data-days-ones >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <span className="colon">:</span>
      <div className="flip-card" data-hours-tens >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <div className="flip-card" data-hours-ones >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <span className="colon">:</span>
      <div className="flip-card" data-minutes-tens >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <div className="flip-card" data-minutes-ones >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <span className="colon">:</span>
      <div className="flip-card" data-seconds-tens >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
      <div className="flip-card" data-seconds-ones >
        <div className="top">0</div>
        <div className="bottom">0</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
