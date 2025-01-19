"use client"
import React, { useState } from "react";
import TeamMember from "@/components/TeamMember";
import Slider from "@/components/Slider";
import Image from "next/image";
import "@/styles/TeamMember.css";

const organisers = [
  {
    name: "Himanshu",
    role: "Kumar Sahu",
    imageSrc: "/team/himanshurect.png",
    socials: {
      linkedin: "https://linkedin.com/in/himanshu",
      behance: "https://behance.net/himanshu",
      twitter: "https://twitter.com/himanshu",
    },
  },
  {
    name: "Fanibhusan",
    role: "Sahu",
    imageSrc: "/team/fanishau.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/fanibhushan-sahu-347697234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      behance: "https://www.behance.net/FaniSahu",
      twitter: "https://x.com/fani_sahu?t=mYsE7DdTvVd_tkqfbZFqxg&s=09",
    },
  },
  {
    name: "Ayush",
    role: "Sahu",
    imageSrc: "/team/ayushrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayushsahu77/",
      github: "https://github.com/AyushSahu77",
      twitter: "https://twitter.com/Ayush_7477",
    },
  },
  {
    name: "Akshat",
    role: "Sahu",
    imageSrc: "/team/akshatrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/akshat-sahu-912521216/",
      twitter: "https://x.com/akshatx134",
      instagram: "https://www.instagram.com/proof.akshat/",
    },
  },
  {
    name: "Darshita",
    role: "Ahuja",
    imageSrc: "/team/darshitaerct.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/darshita-ahuja-9a448b225/",
      twitter: "https://twitter.com/darshuahuja",
      instagram: "https://www.instagram.com/darshita.ahuja?igsh=MTY3MGVmbGJ6ZGJxdw==",
    },
  },
  {
    name: "Harsh",
    role: "Gupta",
    imageSrc: "/team/harshrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/harshgupta-in/",
      github: "https://github.com/Harsh3341",
      twitter: "https://x.com/harshguptatwt",
    },
  },
  {
    name: "Lomesh",
    role: "patil",
    imageSrc: "/team/lomeshrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/lomeshpatil",
      twitter: "https://www.twitter.com/lomeshhpatil",
      instagram: "https://www.instagram.com/lomeshhpatil",
    },
  },
  {
    name: "Mohit",
    role: "Makda",
    imageSrc: "/team/mohitmakda.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohit-makda-608849221/",
      github: "https://github.com/mohitmakda/",
      twitter: "https://x.com/mohit_makda",
    },
  },
  {
    name: "Shubham",
    role: "Jha",
    imageSrc: "/team/shubham.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shubham-jha-58b7b0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/___the___who___?igsh=MXU0MHNmZml1NHFiaw==",
    },
  },

  {
    name: "Shweta",
    role: "Cheemalapati",
    imageSrc: "/team/shwetarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shweta-cheemalapati-0082b8237/",
      twitter: "https://x.com/ShwetaC04389034",
    },
  },
  {
    name: "Smit",
    role: "Javia",
    imageSrc: "/team/smitrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/smit-javia-824221239/",
      twitter: "https://x.com/JaviaSmit",
      instagram: "https://www.instagram.com/smit__javia/",
    },
  },
  {
    name: "Toukir",
    role: "Khan",
    imageSrc: "/team/toukir.png",
    socials: {
      linkedin: "https://linkedin.com/in/toukirkhan",
      github: "https://github.com/toukirkhan",
      instagram: "https://instagram.com/toukirkhan__",
    },
  },
];

const coreTeam = [
  {
    name: "Anubhav",
    role: "Choubey",
    imageSrc: "/team/anubhavfinal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/anubhav-choubey-653680150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Anubhav0401?t=GWhKNKVRTP7SiXT4bvkIBg&s=09",
    },
  },
  {
    name: "Apoorva",
    role: "Sinha",
    imageSrc: "/team/apoorvarect.png",
    socials: {
      linkedin: "https://linkedin.com/in/apoorva-sinha-84bb01272",
      twitter: "https://x.com/vasiinaa",
    },
  },
  {
    name: "Bhumika",
    role: "Deshmukh",
    imageSrc: "/team/bhumikarecct.png",
    socials: {
      linkedin: "https://in.linkedin.com/in/bhumika-deshmukh",
      twitter: "https://x.com/Bhumikadeshmuk",
    },
  },
  {
    name: "Diya",
    role: "Roy",
    imageSrc: "/team/Diyarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/diya-roy-509787286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://instagram.com/diya_roy_17",
    }

  },
  {
    name: "Deepika",
    role: "Guntu",
    imageSrc: "/team/deepikarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/deepikag1114/",
      twitter: "https://x.com/Deepika_1402",

    },
  },
  {
    name: "Girish",
    role: "Sinha",
    imageSrc: "/team/girishrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/girish-sinha-20ab3a258/",
      github: "https://github.com/girishsinha",
      twitter: "https://x.com/Girish_Sinha06",
    },
  },
  {
    name: "K Harsh",
    role: "Naidu",
    imageSrc: "/team/naidurect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/k-harsh-naidu-20012928a",
      github: "https://github.com/Harsh7258",
      instagram: "https://x.com/HarshNa92099478?t=WnZwFU3hc-GlMvNx-_00Ig&s=09",
    },
  },
  {
    name: "Rishita",
    role: "Nair",
    imageSrc: "/team/rishitarect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/rishitanair/",
      twitter: "https://twitter.com/rishitarnair",
    },
  },
  {
    name: "Shriya",
    role: "Dey",
    imageSrc: "/team/shriya.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shriya-dey-394bb726b/",
      behance: "https://behance.net/fanibhushan",
      twitter: "https://x.com/shriya_dey19",
    },
  },
  {
    name: "Shahil",
    role: "Sinha",
    imageSrc: "/team/shahil.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shahil-sinha-7b1636222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/TR-3N",
      twitter: "https://x.com/ShahilSinha9?t=A3KjI-Bjx4pFHcY4MV1KtQ&s=08",
    },
  },
  {
    name: "Tripti",
    role: "Sahu",
    imageSrc: "/team/triptirect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/tripti-s-0a672b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      behance: "https://www.behance.net/triptisahu4UIUX",
      twitter: "https://x.com/Tripti_4?t=WArMXKYYeGRIwq-P6REsoA&s=09",
    },
  },
  {
    name: "Yaman",
    role: "Sahu",
    imageSrc: "/team/yamanrect.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/yaman-sahu-861220257/",
      twitter: "https://x.com/YAMANSAHUS",
      instagram: "https://www.instagram.com/yamanzzzzzz?igsh=c2p2cWk1MXhkYTE4&utm_source=qr",

    },
  },
];

const judges = [
  {
    name: "Harshita Jain",
    // position: "SDE - MPL",
    position: "SDE - MPL",
    imageSrc: "/images/judges/Harshita Jain.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/harshitajain16/",
      twitter: "https://x.com/harshitajain561",
      // github: "https://github.com/harshitajain165"
    },
  },
  {
    name: "Vrihas Pathak",
    position: "SDE-2, Disney+ Hotstar",
    imageSrc: "/images/judges/Vrihas Pathak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vrihaspathak/",
      twitter: "https://x.com/VrihasPathak7",
    },
  },
  {
    name: "Khushi Mahawar",
    position: "MLH Coach",
    imageSrc: "/images/judges/khushi mahawar.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/khushi-mahawar/",
      twitter: "#",
    },
  },
  {
    name: "Akash Kumar Verma",
    position: "Software Sathi",
    imageSrc: "/images/judges/akashkumarverma.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/akashverma095",
      twitter: "https://x.com/AkashV_095",
      //  github: "https://github.com/Akash-095"
    },
  },
  {
    name: "Arya Soni",
    position: "XeroCodee",
    imageSrc: "/images/judges/Arya Soni.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/aryasoni/",
      twitter: "https://x.com/aryasoni98"
    },
  },
  {
    name: "Ayush Kumar",
    position: "Nodeshift",
    imageSrc: "/images/judges/Ayush Kumar.png",
    socials: {
      linkedin: "https://linkedin.com/in/ayush-kumar-984443191",
      twitter: "https://x.com/AyushKu38757918",
      // github: "https://github.com/Ayush7614"
    },
  },
  {
    name: "F. Calvin ",
    position: "Diamante Blockchain",
    imageSrc: "/images/judges/F Calvin Joshua.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/f-calvin-joshua-3039b7213/",
      twitter: "https://x.com/im_calvin1",
      // github: "https://github.com/Ayush7614"
    },
  },
  {
    name: "Manish Kumar",
    position: "HackQuest",
    imageSrc: "/images/judges/manish kumar.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/imanishbarnwal/",
      twitter: "https://twitter.com/imanishbarnwal",
      // github: "https://github.com/mdmemonyasin"
    },
  },
  {
    name: "Mohammad Yasin",
    position: "BoardInfinity",
    imageSrc: "/images/judges/Mohammad Yasin.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mdmemonyasin",
      twitter: "https://x.com/mdmemonyasin",
      //  github: "https://github.com/mdmemonyasin"
    },
  },
  {
    name: "Niket Jain",
    position: "Mutual Mobile",
    imageSrc: "/images/judges/Niket Jain.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/nikeight",
      twitter: "https://x.com/nikeight_",
      // github: "https://github.com/nikeight"
    },
  },
  {
    name: "Sanskriti Harmukh",
    position: "Developer Relations, Hoppscotch",
    imageSrc: "/images/judges/Sanskriti Harmukh.png",
    socials: {
      linkedin: "https://linkedin.com/in/sanskriti-harmukh",
      twitter: "https://x.com/Senzkriti",
      // github: "https://github.com/SanskritiHarmukh"
    },
  },
  {
    name: "Suryakanta",
    position: "Diamante Blockchain",
    imageSrc: "/images/judges/Suryakanta Mahanty.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/suryakanta-mahanty-74483aa2/",
      twitter: "https://x.com/SuryaMahanty",
      // github: "https://github.com/SanskritiHarmukh"
    },
  },
  {
    name: "Vinitpal Singh Arora",
    position: "SDE-Proveway",
    imageSrc: "/images/judges/Vinitpal Singh Arora.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vinitpal-singh-0718a3191/",
      twitter: "https://x.com/vinitpal_arora",

    },
  },
  {
    name: "Jay Saadana",
    position: "Lead Ambassador | Quine",
    imageSrc: "/images/judges/Jay_Saadana.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/jaysaadana/",
      twitter: "https://twitter.com/jaysaadana",

    },
  },
  {
    name: "Ritvi Mishra",
    position: "Dyte",
    imageSrc: "/images/judges/Ritvi_Mishra.png",
    socials: {
      linkedin: "#",
      twitter: "https://twitter.com/Frenzyritz13",

    },
  },
  {
    name: "Abhishek Doshi",
    position: "Google Developer Expert",
    imageSrc: "/images/judges/Abhishek_Doshi.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishekdoshi26/",
      twitter: "https://twitter.com/AbhishekDoshi26",

    },
  },
  {
    name: "Khushi Trivedi",
    position: "Gold MLSA",
    imageSrc: "/images/judges/Khushi_Trivedi.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/the-khushi-trivedi/",
      twitter: "https://twitter.com/KhushiT113",

    },
  },
  {
    name: "Kuldeep Pisda",
    position: " PeekLink  ",
    imageSrc: "/images/judges/Kudeep_Pisda.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kuldeep-pisda/",
      twitter: "https://twitter.com/kdpisda",

    },
  },
  {
    name: "Aayush Gupta",
    position: "Android Developer ",
    imageSrc: "/images/judges/Aayush_Gupta.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/theimpulson/",
      twitter: "#",

    },
  },
  {
    name: "Pranjal Tiwari",
    position: "Impulsive Web ",
    imageSrc: "/images/judges/Pranjal_Tiwari.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/pranjal-tiwari-08346919a/",
      twitter: "https://twitter.com/impranjaljs",

    },
  },
  // {
  //     name: "Aayush Bisen",
  //     position: "Health Vectors",
  //     imageSrc: "/images/judges/Aayush Bisen.png",
  //     socials: {
  //         linkedin: "https://www.linkedin.com/in/aayushbisen/",
  //         twitter: "https://twitter.com/aayushbisen_",

  //     },
  // },
  {
    name: "Param Siddharth",
    position: "TravelopiaGroup",
    imageSrc: "/images/judges/Param_Siddharth.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/paramsiddharth/",
      twitter: "https://twitter.com/ParamSiddharth",

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
        <Image
          src="/images/backgrounds/bg_7.jpg"
          alt="Background"
          fill
          quality={100}
          className="team-background"
        />
        <div className="heading" style={{ marginTop: "30px" }}>
          <h1 className="heading-shadow" style={{ fontFamily: "anton" }}>TEAM</h1>
          <h2 className="heading-small" style={{ fontFamily: "anton" }}>OUR TEAM</h2>
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
          {activeTab === "judges"
            ? judges.map((member, index) => (
              <TeamMember
                key={index}
                position={member.position}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                socials={member.socials}
              />
            ))
            : ""}
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
            : ""}
          {activeTab === "coreTeam" ? coreTeam.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              socials={member.socials}
            />
          )) : ""}

        </div>
      </div>
    </>
  );
};

export default Team;
