import Image from "next/image";
import React from "react";
import Events from "../Events";
import Timer from "../Timer";
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
            <div className="display-page__timer"><Timer /></div>
            <div className="display-page__timeline">Ongoing Events</div>
            <Events />

          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
