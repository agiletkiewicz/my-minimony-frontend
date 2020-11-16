import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    if (this.props.errors.length > 0 && this.state.show) {
      return (
        <Alert
          inline
          variant="danger"
          onClose={() => this.setState({ show: false })}
          dismissible
        >
          {this.props.errors.map((error) => (
            <p>{error}</p>
          ))}
        </Alert>
      );
    }
    if (this.props.errors.length > 0) {
      return (
        <Button
          onClick={() => this.setState({ show: true })}
          size="sm"
          variant="light"
        >
          Show Alert
        </Button>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Error);
