"use client"
import React, { useState, useEffect } from "react";

function Timer() {

  const initialTime = () => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("countdownTime");
      return savedTime ? JSON.parse(savedTime) : 1800; // Default 24 hours
    }
    return 86400;
  };

    const [time, setTime] = useState(1800); // Default to 24 hours

    useEffect(() => {
      const targetDate = new Date(2024, 8, 26, 0o7, 30, 0); // 27 Sept 2024, 10:30 AM
      const now = new Date();

      if (targetDate > now) {
        const delay = targetDate - now;
        console.log(`Timer will start on ${targetDate.toLocaleString()}`);

        const timeoutId = setTimeout(() => {
          setTime(initialTime());
          startCountdown();
        }, delay); // Wait for the specified time to start

        return () => clearTimeout(timeoutId); // Clear the timeout on unmount
      } else {
        console.log("Target time is in the past. Please choose a future time.");
      }
    }, []);

    // Countdown logic
    const startCountdown = () => {
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
      }, 1000); // Update every second

      return () => clearInterval(timer); // Cleanup on unmount
    };

    // Format time function
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
      <div>
        <p>{formatTime(time)}</p>
      </div>
    );
  };

export default Timer;