import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const TeamMember = ({ name, role, position, imageSrc, socials }) => {
  return (
    <div className="team-member">
      <div className="team-member-image bw-image">
        <Image
          src={imageSrc}
          alt={`${name}'s profile`}
          width={150}
          height={150}
          layout="responsive"
          priority={true}
          className="profile-image"
        />
      </div>
      <div className="team-member-details">
        <div className="person-name">
          <h3>{name}</h3>
          <h3 className="role">{role}</h3>
          <h3 className="position">{position}</h3>
        </div>
        <div className="team-member-socials" style={{ marginTop: "30px" }}>
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ width: "20px", height: "20px" }} />
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ width: "20px", height: "20px" }} />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter style={{ width: "20px", height: "20px" }} />{" "}
              {/* X logo */}
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ width: "20px", height: "20px" }} />
            </a>
          )}
          {socials.behance && (
            <a href={socials.behance} target="_blank" rel="noopener noreferrer">
              <FaBehance style={{ width: "20px", height: "20px" }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
