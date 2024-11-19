
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="#">Support</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Hosting</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

