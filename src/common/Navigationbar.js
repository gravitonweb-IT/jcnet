import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import logo from "../../src/assests/navabarimages/logo.png"


const Navigationbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto" style={{ marginLeft: '200px' }}>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
    <Nav.Link href="/Services">Services</Nav.Link>
    <Nav.Link href="/OurServices">OurServices</Nav.Link>
    <Nav.Link href="/Portfolio">portfolio</Nav.Link>
    <button type="button" style={{background:"black", color:"white", padding:"15px" , borderRadius:"10px", marginLeft:"20px"}}>Get A Quote</button>
  </Nav>
</Navbar.Collapse>


      </Navbar>

      {showDrawer && (
  <div className="drawer">
  <Nav className="d-lg-none justify-content-end">
    <Nav.Link href="Home">Home</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
    <Nav.Link href="/Services">Services</Nav.Link>
    <Nav.Link href="/OurServices">OurServices</Nav.Link>
    <Nav.Link href="/Portfolio">portfolio</Nav.Link>
  </Nav>
</div>

)}


      
    </>
  );
};

export default Navigationbar;
