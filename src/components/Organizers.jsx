"use client";
import React from "react";
import TeamMember from "@/components/TeamMember";
import Heading from "./Heading";
import Image from "next/image";

const Organizers = () => {
  const organisers = [
    {
      name: "Himanshu",
      role: "Kumar Sahu",
      imageSrc: "/images/organizers/himanshurect.png",
      socials: {
        linkedin: "https://linkedin.com/in/himanshu",
        behance: "https://behance.net/himanshu",
        twitter: "https://twitter.com/himanshu",
      },
    },
    {
      name: "Fanibhusan",
      role: "Sahu",
      imageSrc: "/images/organizers/fanishau.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/fanibhushan-sahu-347697234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        behance: "https://www.behance.net/FaniSahu",
        twitter: "https://x.com/fani_sahu?t=mYsE7DdTvVd_tkqfbZFqxg&s=09",
      },
    },
    {
      name: "Ayush",
      role: "Sahu",
      imageSrc: "/images/organizers/ayushrect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/ayushsahu77/",
        github: "https://github.com/AyushSahu77",
        twitter: "https://twitter.com/Ayush_7477",
      },
    },
  ];
  return (
    <section className="organizers">
      <Image
        src="/images/backgrounds/bg_3.jpg"
        alt="Background"
        fill
        quality={100}
        className="organizers-section__background"
      />
      <div className="heading">
        <h1 className="heading-shadow">ORGANIZERS</h1>
        <Heading className="heading-small">ORGANIZERS</Heading>
      </div>
      <div className="people">
        {organisers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            socials={member.socials}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizers;
