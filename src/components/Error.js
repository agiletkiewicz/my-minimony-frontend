import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { Portal } from "react-portal";

function Error(props) {


  function clearError() {
    props.dispatch({ type: 'CLEAR_ERROR' });
  }

  return (
    <Portal>
    <Alert
      inline
      variant="danger"
      onClose={() => clearError()}
      dismissible
    >
      {props.errors.map((error) => (
        <p>{error}</p>
      ))}
    </Alert>
    </Portal>
  );
    
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Error);
