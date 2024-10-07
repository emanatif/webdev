
import React from 'react';
import './styles/navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Airbnb Clone</div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#experiences">Experiences</a>
                <a href="#online-experiences">Online Experiences</a>
            </div>
            <div className="user-menu">
                <a href="#login">Login</a>
                <a href="#signup" className="signup">Signup</a>
            </div>
        </nav>
    );
};

export default Navbar;
