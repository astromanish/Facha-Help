import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="nav-link"><Navbar.Brand>Facha Help</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href={`/discuss`}>Discussion Forum</Nav.Link>
                    <Nav.Link href={`/registrationguide`}>Registration Guide</Nav.Link>
                    <Nav.Link href={`/academics`}>Academics</Nav.Link>
                    <Nav.Link href={`/fests`}>Fests</Nav.Link>
                    <Nav.Link href={`/clubs`}>Clubs</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <NavDropdown title="More" id="collasible-nav-dropdown" className="nav-link">
                        <Link to="/" className="nav-link"><NavDropdown.Item>Gallery</NavDropdown.Item></Link>
                        <Link to="/" className="nav-link"><NavDropdown.Item>Placement Stats</NavDropdown.Item></Link>
                        <Link to="/" className="nav-link"><NavDropdown.Item>IIT BHU on the Web</NavDropdown.Item></Link>
                        <NavDropdown.Divider />
                        <Link to="/" className="nav-link"><NavDropdown.Item>Miscellanous Guide</NavDropdown.Item></Link>
                    </NavDropdown>
                </Nav>
                
                <Nav>
                    <Nav.Link href={`/explorevns`}>Explore Varanasi</Nav.Link>
                    <Nav.Link href={`/aboutus`}>About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;