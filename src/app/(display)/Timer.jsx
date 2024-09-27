"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [totalHackingTimer, setTotalHackingTimer] = useState(
    24 * 60 * 60 * 1000
  ); // 24 hours in milliseconds
  const [timerType, setTimerType] = useState("not started");
  const [remainingHackTime, setRemainingHackTime] = useState("24 : 00 : 00");
  const [percentTimeRemaining, setPercentTimeRemaining] = useState(100);

  const updateTimer = () => {
    const now = new Date();
    const startTime = new Date("2024-09-27T11:30:00");
    const endTime = new Date("2024-09-28T11:30:00");

    if (now < startTime) {
      setTimerType("Start's in");
      const r_time_in_secs = (startTime.getTime() - now.getTime()) / 1000;
      const hh = Math.floor(r_time_in_secs / 3600);
      const mm = Math.floor((r_time_in_secs % 3600) / 60);
      const ss = Math.floor(r_time_in_secs % 60);

      setRemainingHackTime(
        `${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm} : ${
          ss < 10 ? `0${ss}` : ss
        }`
      );
      setPercentTimeRemaining(100);
    } else if (now < endTime) {
      setTimerType("end's in");
      const r_time_in_secs = (endTime.getTime() - now.getTime()) / 1000;
      const hh = Math.floor(r_time_in_secs / 3600);
      const mm = Math.floor((r_time_in_secs % 3600) / 60);
      const ss = Math.floor(r_time_in_secs % 60);

      setRemainingHackTime(
        `${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm} : ${
          ss < 10 ? `0${ss}` : ss
        }`
      );
      setPercentTimeRemaining((r_time_in_secs / (24 * 60 * 60)) * 100);
    } else {
      setTimerType("ended");
      setRemainingHackTime("00 : 00 : 00");
      setPercentTimeRemaining(0);
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to set the timer immediately

    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <p className="timerType">{timerType}</p>
      <p>{remainingHackTime}</p>
    </div>
  );
};

export default Timer;
