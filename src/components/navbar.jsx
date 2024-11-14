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
