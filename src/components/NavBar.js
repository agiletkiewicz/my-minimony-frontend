  
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/posts/new">
                <Nav.Link>Add a post</Nav.Link>
            </LinkContainer>
        </Nav>
    </Navbar>
  );
}

export default NavBar;