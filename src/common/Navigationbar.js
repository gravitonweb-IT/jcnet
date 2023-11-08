import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./navbar.css"
import logo from "../assests/navabarimages/logo.png"

const Navigationbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // 
  const [scrolling, setScrolling] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <>
  <div className={`fixed-navbar-wrapper${scrolling ? ' scrolled' : ''}`}>
    <Navbar collapseOnSelect expand="lg" className="fixed-navbar ">
    <Navbar.Brand href="#home" className="navbar-brand">
  <img
    src={logo}
    alt="logo"
    className="logoimage"
  />
</Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleDrawer} />
      <Navbar.Collapse  className='justify-content-end navigation-style'  >
        <Nav>
          <Nav.Link as={Link} to="/" className='narrowbutton text-white'>Home</Nav.Link>
          <Nav.Link as={Link} to="/About" className='narrowbutton text-white'>About</Nav.Link>
          <Nav.Link as={Link} to="/Contact" className='narrowbutton text-white'>Contact</Nav.Link>
          <Nav.Link as={Link} to="/Services" className='narrowbutton text-white'>Services</Nav.Link>
          <Nav.Link as={Link} to="/OurServices" className='narrowbutton text-white'>Our Services</Nav.Link>
          <Nav.Link as={Link} to="/Portfolio" className='narrowbutton text-white'>Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

 
  </div>
</>

  );
};

export default Navigationbar;
