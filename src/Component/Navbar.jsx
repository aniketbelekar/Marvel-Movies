// src/Component/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you are using React Router for navigation
// import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <img src="Marvel-Logo-2000-2012.png" alt="Marvel Logo" className="inline-image" />  Movies
      </h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/favourite">Movies</Link></li>
        <li><Link to="/webseries">Webseries</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
