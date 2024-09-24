import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="display-page">
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
          <div className="display-page__feed">Feed</div>
          <div className="display-page__right">
            <div className="display-page__timer">24:00:00</div>
            <div className="display-page__timeline">Ongoing Events</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
