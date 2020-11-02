import React, { Component } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
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
    debugger
    const {username, password} = this.state
let user = {
      username: username,
      password: password
    }
    
axios.post('http://localhost:3000/api/v1/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
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
      // <div>
      // {/* //   <h1>Log In</h1> */}
      //   <form onSubmit={this.handleSubmit}>
      //     <input
      //       placeholder="username"
      //       type="text"
      //       name="username"
      //       value={username}
      //       onChange={this.handleChange}
      //     />
      //     {/* <input
      //       placeholder="name"
      //       type="text"
      //       name="name"
      //       value={name}
      //       onChange={this.handleChange}
      //     /> */}
      //     <input
      //       placeholder="password"
      //       type="password"
      //       name="password"
      //       value={password}
      //       onChange={this.handleChange}
      //     />
      //     <button placeholder="submit" type="submit">
      //       Log In
      //     </button>
          
      //   </form>
        // {/* <div>
        //   {
        //     this.state.errors ? this.handleErrors() : null
        //   }
        // </div> */}
      // </div>
    );
  }
}
export default Login;