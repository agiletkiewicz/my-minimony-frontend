import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';
import { addBoard } from '../../actions/addBoard';

class BoardInput extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      title: '',
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
    this.props.addBoard(this.state); 
    this.setState({
      title: '',
    })
  };

render() {
  const { title } = this.state

  return (
      <>
        <h4>Add a new board</h4>
        <Form inline onSubmit={this.handleSubmit} className="justify-content-md-center">
          <FormControl 
            type="text" 
            placeholder="title" 
            className="mr-sm-2" 
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <Button variant="outline-success" type="submit">Add</Button>
        </Form>
        <br />
      </>
      );
    }
}


export default connect(null, { addBoard })(BoardInput);