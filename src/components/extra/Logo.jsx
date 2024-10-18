import React from 'react';
import './Logo.css'; // Custom CSS file for styling

const Logo = () => {
  return (
    <div className="logo-container d-flex align-items-center">
      {/* Sun and Cloud Icon */}
      <div className="icon-container">
        <div className="sun"></div>
        <div className="cloud"></div>
      </div>
      {/* App Name */}
      <div className="app-name">
        <h1 className="app-title">Live-Weather</h1>
      </div>
    </div>
  );
};

export default Logo;
