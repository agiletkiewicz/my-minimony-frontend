import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function LoggedInNavBar(props) {
  return (
    <>
      <LinkContainer to="/posts/new">
        <Nav.Link>Add a post</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/boards">
        <Nav.Link>Boards</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`/users/${props.user.id}`}>
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/" onClick={props.logoutUser}>
        <Nav.Link>Log Out</Nav.Link>
      </LinkContainer>
    </>
  );
}

export default LoggedInNavBar;
