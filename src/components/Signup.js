import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      name: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, name, password, password_confirmation} = this.state
    let user = {
      username: username,
      name: name,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3000/api/v1/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }
render() {
    const {username, name, password, password_confirmation} = this.state
return (

  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="5">
        <h2>Sign Up</h2>
        <Form onSubmit={this.handleSubmit}>
            <FormControl
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <FormControl
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <br />
            <FormControl
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br />
            <FormControl
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
            <br />
            <Button variant="primary" type="submit">
              Signup
            </Button>
        </Form>
      </Col>
    </Row>
  </Container>
          // {
          //   this.state.errors ? this.handleErrors() : null
          // }
    );
  }
}
export default Signup;