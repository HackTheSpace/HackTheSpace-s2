"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Tweet } from "react-tweet";

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/display");

      const data = await res.json();

      setTweets(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="display-page__feed">
      {/* {tweets ? (
        <>
          <div className="scrollUp">
            <div className="carousel-track__up">
              {tweets &&
                tweets.map((tweet) => (
                  <Tweet key={tweet.id} id={tweet.id} className="tweets" />
                ))}
            </div>
          </div>

          <div className="scrollDown">
            <div className="carousel-track__down">
              {tweets &&
                tweets.map((tweet) => (
                  <Tweet key={tweet.id} id={tweet.id} className="tweets" />
                ))}
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )} */}
      <iframe
        allowFullScreen
        id="wallsio-iframe"
        src="https://my.walls.io/h4sir?nobackground=1&show_header=0&show_post_info=1&accessibility=0"
        style={{ border: "0", height: "600px", width: "100%" }}
        loading="lazy"
        title="My social wall"
      ></iframe>
    </div>
  );
};

export default TwitterFeed;
