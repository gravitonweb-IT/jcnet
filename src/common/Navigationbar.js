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
    <Navbar collapseOnSelect expand="lg" >
    <Navbar.Brand href="#home" className="navbar-brand">
  <img
    src={logo}
    alt="logo"
    className="logoimage"
  />
</Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleDrawer} />
      <Navbar.Collapse  className='justify-content-end '  >
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Services" >Services</Nav.Link>
          <Nav.Link as={Link} to="/OurServices" >Our Services</Nav.Link>
          <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/Contact" >Contact</Nav.Link>
        </Nav>
        {/* <button className='narrowbutton ' style={{background:"blue" , color:"white", padding:"10px", borderRadius:"10px"}}>Get a Quote</button> */}
      </Navbar.Collapse>
    </Navbar>

 
  </div>
</>

  );
};

export default Navigationbar;
