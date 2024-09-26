"use client"
import React, { useState, useEffect } from "react";

function Timer() {
  // Initialize time from localStorage only in the browser
  const initialTime = () => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("countdownTime");
      return savedTime ? JSON.parse(savedTime) : 86400;
    }
    return 86400; // Default to 24 hours if not in a browser environment
  };

  const [time, setTime] = useState(86400); 

  useEffect(() => {
    setTime(initialTime());

    let timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else {
          const updatedTime = prevTime - 1;
          if (typeof window !== "undefined") {
            localStorage.setItem("countdownTime", JSON.stringify(updatedTime));
          }
          return updatedTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
