import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Shadrack. All rights reserved.</p>
      <p>Built with React and Vite</p>
    </footer>
  );
}

export default Footer;
