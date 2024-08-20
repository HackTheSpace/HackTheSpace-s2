import React from 'react';
import { FaLinkedin, FaBehance, FaTwitter } from 'react-icons/fa';
import './TeamMember.css';

const TeamMember = ({ name, role, role2, imageSrc, socials }) => {
  return (
    <div className="team-member">
      <div className="team-member-image bw-image">
        <img src={imageSrc} alt={`${name}'s profile`} />
      </div>
      <div className="team-member-details">
        <h3>{name}</h3>
        <h3 className="role">{role}</h3>
        {/* <p className="role2">{role2}</p> */}
        <div className="team-member-socials" style={{ marginTop: "30px" }}>
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ width: '20px', height: '20px' }} />
            </a>
          )}
          {socials.behance && (
            <a href={socials.behance} target="_blank" rel="noopener noreferrer">
              <FaBehance style={{ width: '20px', height: '20px' }} />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ width: '20px', height: '20px' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
