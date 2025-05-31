import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch!</h2>
      <p>I'm always open to new opportunities and collaborations.</p>
      <p>Feel free to reach out to me:</p>
      <p className="contact-email">Email: <a href="mailto:code.tribe@yahoo.com">code.tribe@yahoo.com</a></p>
      <div className="social-links">
        {/* Replace with your actual LinkedIn and GitHub profiles */}
        <a href="https://linkedin.com/in/osike-shadrack/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/osike" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
