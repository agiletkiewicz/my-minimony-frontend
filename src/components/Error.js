import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Portal } from "react-portal";

class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  clearError = () => {
    this.props.dispatch({ type: 'CLEAR_ERROR' });
  }

  render() {
      return (
        <Portal>
        <Alert
          inline
          variant="danger"
          onClose={() => this.clearError()}
          dismissible
        >
          {this.props.errors.map((error) => (
            <p>{error}</p>
          ))}
        </Alert>
        </Portal>
      );
    
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Error);
