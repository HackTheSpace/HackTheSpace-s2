import React from 'react';
import { FaLinkedin, FaBehance, FaTwitter } from 'react-icons/fa'; // Importing the necessary icons

const TeamMember = ({ name, role, role2, imageSrc, socials }) => {
  return (
    <div className="team-member">
      <div className="team-member-image bw-image">
        <img src={imageSrc} alt={`${name}'s profile`} />
      </div>
      <div className="team-member-details">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="role2">{role2}</p>
        <div className="team-member-socials" style={{ marginTop: "30px" }}>
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}
          {socials.behance && (
            <a href={socials.behance} target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
