import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="dark">
                <Navbar.Brand href="/home" className="mx-3">Travel Hero</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mx-md-3 mx-auto nav-btn" href="/home">Home</Nav.Link>
                        <Nav.Link className="mx-md-3 mx-auto nav-btn" href="/about">About</Nav.Link>
                        <Nav.Link className="mx-md-3 mx-auto nav-btn" href="/services">Projects</Nav.Link>
                        <Nav.Link className="mx-md-3 mx-auto nav-btn" href="/reviews">Reviews</Nav.Link>
                        <Nav.Link className="mx-md-3 mx-auto nav-btn" href="/admin">Admin</Nav.Link>
                        <Nav.Link className="mx-md-3 mx-auto text-white px-3 login" href="/Login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;