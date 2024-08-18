

import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <div className="team">
      <div className="heading">
        <h1 className="heading-shadow">TEAM</h1>
        {/* Replace Heading with an h2 if it's not a custom component */}
        <h2 className="heading-small">OUR TEAM</h2>
      </div>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"flex-start",padding:"0"}}>
      <TeamMember
        name="Himanshu Sahu"
        role="Founder"
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

      </div>
      
      {/* Add more team members as needed */}
    </div>
  );
};

export default Team;
