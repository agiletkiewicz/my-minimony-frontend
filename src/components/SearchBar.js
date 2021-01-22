import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value.toLowerCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_SEARCH', search: this.state.search });
    this.setState({
      search: '',
    });
  };

  clearSearch = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'CLEAR_SEARCH' });
  };
  

  render() {
    return (
      <>
        <br />
        <Form
          inline
          onSubmit={this.handleSubmit}
          className="justify-content-md-center"
        >
          <Form.Row className="align-items-center">
          <Col xs="auto">
          <Form.Control
            type="text"
            className="mr-sm-2"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          </Col>
          <Col xs="auto">
          <Button variant="outline-success" type="submit">
            Search
          </Button>
          </Col>
          </Form.Row>
        </Form>
        {this.props.search.length > 0 ? (
          <>
            <br />
            <Button class="text-center" variant="light" type="submit" onClick={this.clearSearch}>
              Clear Search
            </Button>
            <br />
          </>
        ) : null}
        <br />
      </>
    );
  }
}

export default connect((state) => ({ search: state.search }))(SearchBar);
