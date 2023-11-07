import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";




const Navigationbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
        {/* <img src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/logo/logo.svg" alt="logo" /> */}
        <h1>
          LOGO
        </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/OurServices">OurServices</Nav.Link>
            <Nav.Link href="/Portfolio">portfolio</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

      {showDrawer && (
        <div className="drawer">
          <Nav>
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/OurServices">OurServices</Nav.Link>
            <Nav.Link href="/Portfolio">portfolio</Nav.Link>
          </Nav>
        </div>
      )}

      <Button variant="primary" onClick={toggleDrawer} className="d-lg-none">
        Open Drawer
      </Button>
    </>
  );
};

export default Navigationbar;
