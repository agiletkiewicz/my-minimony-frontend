import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';
import { loginUser } from '/Users/Agi/Flatiron/code/react-project-build/my-minimony-frontend/src/actions/loginUser.js';
import Alert from 'react-bootstrap/Alert';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
     };
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state); 
    this.setState({
      username: '',
      password: '',
    })
  };

render() {
  const {username, password} = this.state

  return (
    <>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl 
            type="text" 
            placeholder="username" 
            className="mr-sm-2" 
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <FormControl 
            type="password" 
            placeholder="password" 
            className="mr-sm-2" 
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button variant="outline-success" type="submit">Login</Button>
        </Form>
        </>
      );
    }
}

const mapStateToProps = state => {
  return {
      error: state.user.error
  }
}

export default connect(mapStateToProps, { loginUser })(Login);