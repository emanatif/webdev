import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '/assets/favicon.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Airbnb</h1>
      </div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link> {/* Link to the homepage (root route) */}
          </li>
          <li><a href="#">Experiences</a></li>
          <li><a href="#">Online Experiences</a></li>
        </ul>
      </nav>
      <div className="user-menu">
        {/* Use Link for navigation */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        /
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
