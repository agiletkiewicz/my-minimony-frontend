import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      // errors: ''
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
      errors: ''
    })
  };


handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

render() {
  const {username, password} = this.state

  return (
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
      );
    }
}
export default connect(null, { loginUser })(Login);