
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
