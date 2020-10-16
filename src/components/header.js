import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./css/header.css";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        <Navbar.Brand>Facha Help</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href={`/discussion-forum`}>Discussion Forum</Nav.Link>
          <Nav.Link href={`/registration-guide`}>Registration Guide</Nav.Link>
          <Nav.Link href={`/academics`}>Academics</Nav.Link>
          <Nav.Link href={`/gymkhana`}>Gymkhana</Nav.Link>
          <Nav.Link href={`/fests`}>Festivals</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title="More"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/gallery">
              Gallery
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/placement-stats">
              Placement Stats
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/web-presence">
              IIT BHU on the Web
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item as={Link} to="/miscellanous-guide">
              Miscellanous Guide
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link href={`/explore-vns`}>Explore Varanasi</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown
            title="Get in Touch"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/about-us">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/feedback">
              Feedback
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tnc">
              Terms and Conditions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
