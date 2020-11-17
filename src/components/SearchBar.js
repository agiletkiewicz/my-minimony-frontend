import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_SEARCH', search: this.state.searchInput });
    this.setState({
      searchInput: '',
    });
  };

  clearSearch = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'CLEAR_SEARCH' });
  };

  render() {
    const { search } = this.props;
    const { searchInput } = this.state;

    return (
      <>
        <br />
        <Form
          inline
          onSubmit={this.handleSubmit}
          className="justify-content-md-center"
        >
          <Form.Control
            type="text"
            className="mr-sm-2"
            name="search"
            value={searchInput}
            onChange={this.handleChange}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
        {search.length > 0 ? (
          <>
            <br />
            <Button variant="light" type="submit" onClick={this.clearSearch}>
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

SearchBar.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect((state) => ({ search: state.search }))(SearchBar);
