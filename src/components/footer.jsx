<<<<<<< HEAD
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
=======

import React from 'react';
import './styles/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#support">Support</a>
                <a href="#community">Community</a>
                <a href="#hosting">Hosting</a>
                <a href="#about">About</a>
            </div>
            <div className="social-media">
                <a href="#facebook" className="social-icon">Facebook</a>
                <a href="#twitter" className="social-icon">Twitter</a>
                <a href="#instagram" className="social-icon">Instagram</a>
            </div>
            <p className="copyright">© 2024 Airbnb Clone. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
