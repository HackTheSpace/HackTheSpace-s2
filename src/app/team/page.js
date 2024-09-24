"use client"
import React, { useState } from "react";
import TeamMember from "../../components/TeamMember";
import Slider from "@/components/Slider"; // Assuming this is the correct import path
import "@/styles/TeamMember.css";

const organisers = [
  {
    name: "Himanshu",
    role: "Kumar Sahu",
    imageSrc: "/images/himanshurect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  // {
  //   name: "Fanibhusan",
  //   role: "Sahu",
  //   imageSrc: "/images/himanshurect.png",
  //   socials: {
  //     linkedin: "https://linkedin.com/in/himanshu",
  //     behance: "https://behance.net/himanshu",
  //     twitter: "https://twitter.com/himanshu",
  //   },
  // },
  {
    name: "Ayush",
    role: "Sahu",
    imageSrc: "/images/ayushrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Akshat",
    role: "Sahu",
    imageSrc: "/images/akshatrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Mohit",
    role: "Makda",
    imageSrc: "/images/mohitrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Harsh",
    role: "Gupta",
    imageSrc: "/images/harshrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Smit",
    role: "Javia",
    imageSrc: "/images/smitrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Shubham",
    role: "Jha",
    imageSrc: "/images/shubham.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Darshita",
    role: "Ahuja",
    imageSrc: "/images/darshitaerct.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Shweta",
    role: "Cheemalapati",
    imageSrc: "/images/shwetarect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Lomesh",
    role: "patil",
    imageSrc: "/images/lomeshrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },

];

const coreTeam = [
  {
    name: "Anubhav",
    role: "Choubey",
    imageSrc: "/images/anubhavrect.png",
    socials: {
      linkedin: "https://linkedin.com/in/fanibhushan",
      behance: "https://behance.net/fanibhushan",
      twitter: "https://twitter.com/fanibhushan",
    },
  },
  {
    name: "Apoorva",
    role: "Sinha",
    imageSrc: "/images/apoorvarect.png",
    socials: {
      linkedin: "https://linkedin.com/in/fanibhushan",
      behance: "https://behance.net/fanibhushan",
      twitter: "https://twitter.com/fanibhushan",
    },
  },
  {
    name: "Bhumika",
    role: "Deshmukh",
    imageSrc: "/images/bhumikarecct.png",
    socials: {
      linkedin: "https://linkedin.com/in/fanibhushan",
      behance: "https://behance.net/fanibhushan",
      twitter: "https://twitter.com/fanibhushan",
    },
  },
  {
    name: "Diya",
    role: "Roy",
    imageSrc: "/images/diyarect.png",
    socials: {
      linkedin: "https://linkedin.com/in/fanibhushan",
      behance: "https://behance.net/fanibhushan",
      twitter: "https://twitter.com/fanibhushan",
  }

    },
    {
      name: "Deepika",
      role: "Guntu",
      imageSrc: "/images/deepikarect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Girish",
      role: "Sinha",
      imageSrc: "/images/girishrect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Harsh",
      role: "Naidu",
      imageSrc: "/images/naidurect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Kaushal",
      role: "Ranjan",
      imageSrc: "/images/Kaushal.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Rishita",
      role: "Nair",
      imageSrc: "/images/rishitarect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Ritesh",
      role: "Sahu",
      imageSrc: "/images/riteshrect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Shriya",
      role: "Dey",
      imageSrc: "/images/shriya.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Shahil",
      role: "Sinha",
      imageSrc: "/images/shahil.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Tripti",
      role: "Sahu",
      imageSrc: "/images/triptirect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
    {
      name: "Yaman",
      role: "Sahu",
      imageSrc: "/images/yamanrect.png",
      socials: {
        linkedin: "https://linkedin.com/in/fanibhushan",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://twitter.com/fanibhushan",
      },
    },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState("organiser");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="team">
        <div className="heading">
          <h1 className="heading-shadow">TEAM</h1>
          <h2 className="heading-small">OUR TEAM</h2>
        </div>
        <Slider activeTab={activeTab} onTabChange={handleTabChange} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "0",
            width: "100%",
          }}
        >
          {activeTab === "organiser"
            ? organisers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                  socials={member.socials}
                />
              ))
            : coreTeam.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                  socials={member.socials}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Team;
