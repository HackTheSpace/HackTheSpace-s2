import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <div className="team">
      <div className="heading">
        <h1 className="heading-shadow">TEAM</h1>
        {/* Replace Heading with an h2 if it's not a custom component */}
        <h2 className="heading-small">OUR TEAM</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          padding: "0",
        }}
      >
        <TeamMember
          name="Himanshu "
          role="Kumar Sahu"
          role2="LEAD ORGANIZER"
          imageSrc="/images/himanshu.png"
          socials={{
            linkedin: "https://linkedin.com/in/himanshu",
            behance: "https://behance.net/himanshu",
            twitter: "https://twitter.com/himanshu",
          }}
        />

        <TeamMember
          name="Fanibhushan Sahu"
          role="Co-founder"
          role2="GRAPHIC HEAD"
          imageSrc="/images/himanshu.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Harsh Gupta"
          role=""
          role2="TECH LEAD"
          imageSrc="/images/Harsh_1.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Shweta"
          role="CORE TEAM MEMBER"
          role2="CONTENT HEAD"
          imageSrc="/images/shweta.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

<TeamMember
          name="Girish Sinha"
          role="CORE TEAM MEMBER"
          role2="TECH TEAM MEMBER"
          imageSrc="/images/1.1.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Deepika Guntu"
          role="CORE TEAM MEMBER"
          role2="Content Team "
          imageSrc="/images/img_-_Deepika_Guntu-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Fanibhushan Sahu"
          role="Co-founder"
          role2="GRAPHIC HEAD"
          imageSrc="/images/Rishita_Nair_-_Rishita_R_Nair-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Ayush Sahu"
          role="ORGANISER MEMBER"
          role2="PR AND OPERATIONS LEAD"
          imageSrc="/images/ayush_sahu-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Anubhav Choubey"
          role="CORE TEAM MEMBER"
          role2="Social Media and Marketing Team"
          imageSrc="/images/IMG_20240802_180729_-_anubhav_choubey-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Bhumika Deshmukh"
          role="CORE TEAM"
          role2="PR AND OPEREATIONS TEAM"
          imageSrc="/images/IMG_20240820_091552_-_Bhumika_Deshmukh-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/fanibhushan",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />

        <TeamMember
          name="Apoorva sinha"
          role="CORE TEAM"
          role2="PR and outreach team"
          imageSrc="/images/veopcm_-_Apoorva_Sinha-removebg-preview.png"
          socials={{
            linkedin: "https://linkedin.com/in/apoorva-sinha-84bb01272",
            behance: "https://behance.net/fanibhushan",
            twitter: "https://twitter.com/fanibhushan",
          }}
        />
      </div>

      {/* Add more team members as needed */}
    </div>
  );
};

export default Team;
