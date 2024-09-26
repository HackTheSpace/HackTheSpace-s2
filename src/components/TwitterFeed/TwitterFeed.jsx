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
      console.log("fetchTweets");
    } catch (error) {}
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  console.log(tweets);

  return (
    <div className="display-page__feed">
      {tweets ? (
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
      )}
    </div>
  );
};

export default TwitterFeed;
