  
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import Login from './users/Login';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/logoutUser';
import LoggedInNavBar from './users/LoggedInNavBar'

class NavBar extends React.Component {

  render() {
    return (
    <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
            <LinkContainer to="/posts">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            { 
              this.props.user.isLoggedIn ? 
              <LoggedInNavBar logoutUser={this.props.logoutUser} /> : 
              <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
            }
        </Nav>
          {
            this.props.user.isLoggedIn ? null : <Login />
          }
    </Navbar>
  );
}

}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);