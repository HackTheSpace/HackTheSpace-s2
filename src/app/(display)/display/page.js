import Image from "next/image";
import React from "react";
import Events from "../Events";
import Timer from "../Timer";
import TwitterFeed from "@/components/TwitterFeed/TwitterFeed";

const page = () => {
  return (
    <main>
      <div className="display-page">
        <Image
          src="/images/backgrounds/LivePage2.png"
          alt="Background"
          fill
          quality={100}
          priority
          className="display-page__background"
        />
        <div className="display-page__logo">
          <Image
            id="logo"
            src="/logo-main.webp"
            alt="logo"
            width={130}
            height={55}
          />
        </div>
        <section className="display-page__content">
          <TwitterFeed />
          <div className="display-page__right">
            <div className="display-page__timer">
              <Timer />
            </div>
            <div className="display-page__timeline">Ongoing Events</div>
            <Events />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
