import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="nav-link"><Navbar.Brand>Facha Help</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link"><Nav.Link>Discussion Forum</Nav.Link></Link>
                    <Link to="/" className="nav-link"><Nav.Link>Registration</Nav.Link></Link>
                    <Link to="/" className="nav-link"><Nav.Link>Fests</Nav.Link></Link>
                    <Link to="/" className="nav-link"><Nav.Link>Clubs</Nav.Link></Link>
                    <Link to="/" className="nav-link"><Nav.Link>Academics</Nav.Link></Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown" className="nav-link">
                        <Link to="/" className="nav-link"><NavDropdown.Item>Gallery</NavDropdown.Item></Link>
                        <Link to="/" className="nav-link"><NavDropdown.Item>Placement Stats</NavDropdown.Item></Link>
                        <Link to="/" className="nav-link"><NavDropdown.Item>IIT BHU on the Web</NavDropdown.Item></Link>
                        <NavDropdown.Divider />
                        <Link to="/" className="nav-link"><NavDropdown.Item>Miscellanous Guide</NavDropdown.Item></Link>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to="/" className="nav-link"><Nav.Link>Explore Varanasi</Nav.Link></Link>
                    <Link to="/" className="nav-link"><Nav.Link>About Us</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;