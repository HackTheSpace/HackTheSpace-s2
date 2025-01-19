import React from "react";
import "../styles/Slider.css";

const Slider = ({ activeTab, onTabChange }) => {
  return (
    <div className="slider-container sc2">
      <div className="tabs">
        <button
          className={activeTab === "judges" ? "active" : ""}
          onClick={() => onTabChange("judges")}
        >
          Mentors & Judges
        </button>
        <button
          className={activeTab === "organiser" ? "active" : ""}
          onClick={() => onTabChange("organiser")}
        >
          Organizer
        </button>
        <button
          className={activeTab === "coreTeam" ? "active" : ""}
          onClick={() => onTabChange("coreTeam")}
        >
          Core Team
        </button>
      </div>
    </div>
  );
};

export default Slider;
