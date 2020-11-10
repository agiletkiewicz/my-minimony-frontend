import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  handleChange = (event) => {
    this.setState({
        search: event.target.value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.dispatch({ type: 'ADD_SEARCH', search: this.state.search });
      this.setState({
          search: ""
      })
  }

  render() {
      return (
        <Form inline onSubmit={this.handleSubmit}>
            <Form.Control 
            type="text" 
            className="mr-sm-2" 
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      )
  }
}


export default connect()(SearchBar);