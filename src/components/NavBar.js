import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import Login from './users/Login';
import { logoutUser } from '../actions/logoutUser';
import LoggedInNavBar from './users/LoggedInNavBar';

class NavBar extends React.Component {
  render() {
    const { user, logoutUser } = this.props;

    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Nav className="mr-auto">
          <LinkContainer to="/posts">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {user.isLoggedIn ? (
            <LoggedInNavBar logoutUser={logoutUser} user={user} />
          ) : (
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        {user.isLoggedIn ? null : <Login />}
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.any,
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
