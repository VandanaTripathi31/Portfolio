import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <a href="#home">Home</a>
        <span className="divider"></span>
        <a href="#services">Skills</a>
        <span className="divider"></span>
        <a href="#education">Education</a>
      </div>

      <hr />
      
      <div className="footer-text">
        &copy; 2024 Vandana Tripathi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
