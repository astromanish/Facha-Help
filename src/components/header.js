import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        <Navbar.Brand>Facha Help</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href={`/discussion`}>Discussion Forum</Nav.Link>
          <Nav.Link href={`/registrationguide`}>Registration Guide</Nav.Link>
          <Nav.Link href={`/academics`}>Academics</Nav.Link>
          <Nav.Link href={`/fests`}>Fests</Nav.Link>
          <Nav.Link href={`/clubs`}>Clubs</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title="More"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item>
              <Link to="/" className="nav-link">
                Gallery
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/" className="nav-link">
                Placement Stats
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/webpresence" className="nav-link">
                IIT BHU on the Web
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>
              <Link to="/" className="nav-link">
                Miscellanous Guide
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link href={`/explorevns`}>Explore Varanasi</Nav.Link>
          <Nav.Link href={`/aboutus`}>About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
