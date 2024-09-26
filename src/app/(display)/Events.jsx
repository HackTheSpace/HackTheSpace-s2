"use client";
import React, { useEffect, useRef } from "react";
import "./stepper.css";
import { timeconfig } from "./timeconfig.js";
import Image from "next/image";

const Events = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll the container by a specific distance
  const scrollByDistance = (distance) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: distance,
        behavior: "smooth",
      });
    }
  };

  // Function to get the current time in a matching format (e.g., 8:30 AM)
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const period = now.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${period}`;
  };

  // Function to check if the current time matches any event time
  const checkCurrentTime = () => {
    const currentTime = getCurrentTime();

    timeconfig.forEach((event, index) => {
      const eventTime = `${event.time} ${event.period}`;
      if (currentTime === eventTime) {
        // Scroll down by a set distance (e.g., 100px per event)
        scrollByDistance(100);
      }
    });
  };

  useEffect(() => {
    // Set an interval to check the time every minute
    const interval = setInterval(() => {
      checkCurrentTime();
    }, 60000); // Every 60 seconds

    // Check immediately when the component mounts
    checkCurrentTime();

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scheduleBox" ref={scrollContainerRef}>
      <div className="window"></div>
      {timeconfig.map((e, index) => {
        return (
          <div className="timeline" key={e.id}>
            <div className="container right">
              <div className="timelineIcon">
                <Image
                  width={100}
                  height={100}
                  alt="{harsh}"
                  src="/globeIcon.png"
                />
              </div>
              <div className="content">
                <h2>
                  {e.time}
                  <div>{e.period}</div>
                  {e.day}
                </h2>
                <p>{e.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
