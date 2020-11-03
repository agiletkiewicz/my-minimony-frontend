  
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import Login from './Login';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/logoutUser';

class NavBar extends React.Component {

  render() {
    return (
    <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            { 
              this.props.user.isLoggedIn ? 
              <LinkContainer to="/posts/new"><Nav.Link>Add a post</Nav.Link></LinkContainer> : 
              null
            }
            { 
              this.props.user.isLoggedIn ? 
              <LinkContainer to='/' onClick={this.props.logoutUser}><Nav.Link>Log Out</Nav.Link></LinkContainer> : 
              <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
            }
        </Nav>
        <Login />
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