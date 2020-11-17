import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function LoggedInNavBar({ user, logoutUser }) {
  return (
    <>
      <LinkContainer to="/posts/new">
        <Nav.Link>Add a post</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/boards">
        <Nav.Link>Boards</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`/users/${user.id}`}>
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/" onClick={logoutUser}>
        <Nav.Link>Log Out</Nav.Link>
      </LinkContainer>
    </>
  );
}

LoggedInNavBar.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func,
};

export default LoggedInNavBar;
