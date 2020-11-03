  
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavItem from 'react-bootstrap/NavItem';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Login from './Login';

const NavBar = (props) => {

  let history = useHistory();

  const handleClick = () => {
    axios.delete('http://localhost:3000/api/v1/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout();
      history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (
    <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            { 
              props.loggedInStatus ? 
              <LinkContainer to="/posts/new"><Nav.Link>Add a post</Nav.Link></LinkContainer> : 
              null
            }
            { 
              props.loggedInStatus ? 
              <LinkContainer to='/logout' onClick={handleClick}><Nav.Link>Log Out</Nav.Link></LinkContainer> : 
              <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
            }
        </Nav>
        <Login />
    </Navbar>
  );
}

export default NavBar;