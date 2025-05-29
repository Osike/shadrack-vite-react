import React from 'react';
import './Journey.css';

function Journey() {
  return (
    <section id="journey" className="journey-section">
      <h2>My Journey</h2>

      <div className="journey-item">
        <h3>Education</h3>
        <p><strong>University of Mombasa</strong></p>
        <p>Bachelors in Information Technology (I.T)</p>
        <p><em>Expected Graduation: e.g., May 2026</em></p>
      </div>

      <div className="journey-item">
        <h3>Certifications</h3>
        <ul>
          <li>Cisco Certified Network Associate (CCNA)</li>
          <li>Cybersecurity Foundations (e.g., CompTIA Security+, Certified Ethical Hacker) </li>
          <li>Python Programming (e.g., Python Institute PCAP/PCEP) </li>
        </ul>
      </div>

      {/* You can add more sections like work experience or skills here */}
    </section>
  );
}

export default Journey;
