import React from 'react';
import './HeroSection.css';
// Import your image directly if it's in the src folder
// import shadrackProfile from '../assets/shadrack_profile.jpg';
// Or, if it's in the public folder, use the direct path:

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img
          src="/assets/shadrack_profile.png" // Path relative to the public folder
          alt="Shadrack Profile"
          className="profile-image"
        />
        <h1>Hi, I'm Shadrack!</h1>
        <p>A professional IT project manager</p>
        <p>I specialize in crafting robust and user-friendly applications.</p>
      </div>
    </section>
  );
}

export default HeroSection;
