import React from 'react';
import './Header.css';

function Header() {
  const handleDownloadCV = () => {
    // Vite recommends putting static assets in the 'public' folder.
    // The path here is relative to the 'public' folder.
    const cvPath = '././shadrack_cv.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <header className="header">
      <div className="header-info">
        <span>Shadrack from the code_tribe clan</span>
        <span>Email: <a href="mailto:code.tribe@yahoo.com">code.tribe@yahoo.com</a></span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={handleDownloadCV} className="download-cv-btn">Download CV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;