import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        {/* Uncomment these lines if you have corresponding routes and components */}
        {/* 
        <li>
          <Link to="/ourservices">Our Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        */}
      </ul>
    </div>
  );
};

export default Navbar;