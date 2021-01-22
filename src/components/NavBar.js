import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import Login from './users/Login';
import { logoutUser } from '../actions/logoutUser';
import LoggedInNavBar from './users/LoggedInNavBar';

function NavBar(props) {

    return (
      <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/posts">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {props.user.isLoggedIn ? (
            <LoggedInNavBar
              logoutUser={props.logoutUser}
              user={props.user}
            />
          ) : (
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        {props.user.isLoggedIn ? null : <Login />}
      </Navbar.Collapse>
      </Navbar>
    );

}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
