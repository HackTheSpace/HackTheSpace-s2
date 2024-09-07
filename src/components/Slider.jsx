import React from 'react';

const Slider = ({ activeTab, onTabChange }) => {
  return (
    <div className="slider-container">
      <div className="tabs">
        <button
          className={activeTab === 'organiser' ? 'active' : ''}
          onClick={() => onTabChange('organiser')}
        >
          Organiser
        </button>
        <button
          className={activeTab === 'coreTeam' ? 'active' : ''}
          onClick={() => onTabChange('coreTeam')}
        >
          Core Team
        </button>
      </div>
    </div>
  );
};

export default Slider;
