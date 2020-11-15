import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { addUser } from '../../actions/addUser.js';
import { connect } from 'react-redux';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      name: '',
      password: '',
      passwordConfirmation: '',
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
      const {username, name, password, passwordConfirmation} = this.state
      let user = {
        username: username,
        name: name,
        password: password,
        passwordConfirmation: passwordConfirmation
      }
      
      this.props.addUser(user, this.handleSuccess);

    };

  handleSuccess = () => {
    this.setState({
      username: '',
      name: '',
      password: '',
      passwordConfirmation: '',
    })

    this.props.history.push('/')
  }

      
  render() {

    const {username, name, password, passwordConfirmation} = this.state

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
                  name="passwordConfirmation"
                  value={passwordConfirmation}
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
    );
  }
}
export default connect(null, { addUser })(Signup);