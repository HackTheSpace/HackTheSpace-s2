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
  {
    name: "Fanibhusan",
    role: "Sahu",
    imageSrc: "/images/fanishau.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/fanibhushan-sahu-347697234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      behance: "https://www.behance.net/FaniSahu",
      twitter: "https://x.com/fani_sahu?t=mYsE7DdTvVd_tkqfbZFqxg&s=09",
    },
  },
  {
    name: "Ayush",
    role: "Sahu",
    imageSrc: "/images/ayushrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayushsahu77/",
      github: "",
      twitter: "https://twitter.com/Ayush_7477",
    },
  },
  {
    name: "Akshat",
    role: "Sahu",
    imageSrc: "/images/akshatrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/akshat-sahu-912521216/",
      twitter: "https://x.com/akshatx134",
      instagram: "https://www.instagram.com/proof.akshat/",
    },
  },
  {
    name: "Mohit",
    role: "Makda",
    imageSrc: "/images/mohitmakda.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohit-makda-608849221/",
      github: "https://github.com/mohitmakda/",
      twitter: "https://x.com/mohit_makda",
    },
  },
  {
    name: "Harsh",
    role: "Gupta",
    imageSrc: "/images/harshrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/harshgupta-in/",
      github: "https://github.com/Harsh3341",
      twitter: "https://x.com/harshguptatwt",
    },
  },
  {
    name: "Smit",
    role: "Javia",
    imageSrc: "/images/smitrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/smit-javia-824221239/",
      twitter: "https://x.com/JaviaSmit",
      instagram: "https://www.instagram.com/smit__javia/",
    },
  },
  {
    name: "Shubham",
    role: "Jha",
    imageSrc: "/images/shubham.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shubham-jha-58b7b0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      behance: "/",
      instagram: "https://www.instagram.com/___the___who___?igsh=MXU0MHNmZml1NHFiaw==",
    },
  },
  {
    name: "Darshita",
    role: "Ahuja",
    imageSrc: "/images/darshitaerct.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/darshita-ahuja-9a448b225/",
      twitter: "https://twitter.com/darshuahuja",
      instagram: "https://www.instagram.com/darshita.ahuja?igsh=MTY3MGVmbGJ6ZGJxdw==",
    },
  },
  {
    name: "Shweta",
    role: "Cheemalapati",
    imageSrc: "/images/shwetarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shweta-cheemalapati-0082b8237/",
      github: "/",
      twitter: "https://x.com/ShwetaC04389034",
    },
  },
  {
    name: "Lomesh",
    role: "patil",
    imageSrc: "/images/lomeshrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/lomeshpatil",
      twitter: "https://www.twitter.com/lomeshhpatil",
      instagram: "https://www.instagram.com/lomeshhpatil",
    },
  },

];

const coreTeam = [
  {
    name: "Anubhav",
    role: "Choubey",
    imageSrc: "/images/anubhavfinal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/anubhav-choubey-653680150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "/",
      twitter: "https://x.com/Anubhav0401?t=GWhKNKVRTP7SiXT4bvkIBg&s=09",
    },
  },
  {
    name: "Apoorva",
    role: "Sinha",
    imageSrc: "/images/apoorvarect.png",
    socials: {
      linkedin: "https://linkedin.com/in/apoorva-sinha-84bb01272",
      github: "/",
      twitter: "https://x.com/vasiinaa",
    },
  },
  {
    name: "Bhumika",
    role: "Deshmukh",
    imageSrc: "/images/bhumikarecct.png",
    socials: {
      linkedin: "https://in.linkedin.com/in/bhumika-deshmukh",
      github: "/",
      twitter: "https://x.com/Bhumikadeshmuk",
    },
  },
  {
    name: "Diya",
    role: "Roy",
    imageSrc: "/images/diyarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/diya-roy-509787286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "/",
      instagram: "https://instagram.com/diya_roy_17",
  }

    },
    {
      name: "Deepika",
      role: "Guntu",
      imageSrc: "/images/deepikarect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/deepikag1114/",
        twitter: "https://x.com/Deepika_1402",
        instagram: "/",
        
      },
    },
    {
      name: "Girish",
      role: "Sinha",
      imageSrc: "/images/girishrect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/girish-sinha-20ab3a258/",
        github: "https://github.com/girishsinha",
        twitter: "https://x.com/Girish_Sinha06",
      },
    },
    {
      name: "k Harsh",
      role: "Naidu",
      imageSrc: "/images/naidurect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/k-harsh-naidu-20012928a",
        github: "https://github.com/Harsh7258",
        instagram: "https://x.com/HarshNa92099478?t=WnZwFU3hc-GlMvNx-_00Ig&s=09",
      },
    },
    {
      name: "Rishita",
      role: "Nair",
      imageSrc: "/images/rishitarect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/rishitanair/",
        instagram: "/",
        twitter: "https://twitter.com/rishitarnair",
      },
    },
    {
      name: "Shriya",
      role: "Dey",
      imageSrc: "/images/shriya.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/shriya-dey-394bb726b/",
        behance: "https://behance.net/fanibhushan",
        twitter: "https://x.com/shriya_dey19",
      },
    },
    {
      name: "Shahil",
      role: "Sinha",
      imageSrc: "/images/shahil.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/shahil-sinha-7b1636222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/TR-3N",
        twitter: "https://x.com/ShahilSinha9?t=A3KjI-Bjx4pFHcY4MV1KtQ&s=08",
      },
    },
    {
      name: "Tripti",
      role: "Sahu",
      imageSrc: "/images/triptirect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/tripti-s-0a672b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        behance: "https://www.behance.net/triptisahu4UIUX", 
        twitter: "https://x.com/Tripti_4?t=WArMXKYYeGRIwq-P6REsoA&s=09",
      },
    },
    {
      name: "Yaman",
      role: "Sahu",
      imageSrc: "/images/yamanrect.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/yaman-sahu-861220257/",
        twitter: "https://x.com/YAMANSAHUS",
        instagram: "https://www.instagram.com/yamanzzzzzz?igsh=c2p2cWk1MXhkYTE4&utm_source=qr",
        
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
        <div className="heading" style={{marginTop:"30px"}}>
          <h1 className="heading-shadow" style={{fontFamily:"anton"}}>TEAM</h1>
          <h2 className="heading-small" style={{fontFamily:"anton"}}>OUR TEAM</h2>
        </div>
        <Slider activeTab={activeTab} onTabChange={handleTabChange} className="slider" />
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
