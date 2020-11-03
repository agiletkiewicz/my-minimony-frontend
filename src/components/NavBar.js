  
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
import { connect } from 'react-redux';
import { logoutUser } from '../actions/logoutUser';

class NavBar extends React.Component {

  // const history = useHistory();

  // handleClick = () => {
  //   this.props.logoutUser();
  // }

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
              <LinkContainer to='/logout' onClick={this.props.logoutUser}><Nav.Link>Log Out</Nav.Link></LinkContainer> : 
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