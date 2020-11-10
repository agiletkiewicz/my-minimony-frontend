  
import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';


class Error extends React.Component {

  render() {
    if (this.props.errors.length > 0) { 
        return (
            <Alert inline variant={'danger'}>
                {this.props.errors.map(error => <p>{error}</p>)}
            </Alert>
        );
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
      errors: state.errors
  }
}

export default connect(mapStateToProps)(Error);