<<<<<<< HEAD
import React from 'react';
import './Navbar.css';  
import logo from '../assets/favicon.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> 
        <h1>Airbnb</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Experiences</a></li>
          <li><a href="#">Online Experiences</a></li>
        </ul>
      </nav>
      <div className="user-menu">
        <button>Login</button> / <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
=======

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
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
