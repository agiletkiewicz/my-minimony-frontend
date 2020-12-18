import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class FollowBoardButton extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    // this.props.deleteBoard(this.props.board.id, this.handleSuccess);
  };


  render() {
    return (
      <Button variant="success" onClick={this.handleClick}>
        Follow board
      </Button>
    );
  }
}

export default connect()(FollowBoardButton);
