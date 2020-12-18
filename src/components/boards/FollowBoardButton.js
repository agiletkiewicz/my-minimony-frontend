import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { followBoard } from '../../actions/followBoard';


class FollowBoardButton extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.followBoard(this.props.boardId, this.props.user.id);
  };


  render() {
    return (
      <Button variant="success" onClick={this.handleClick}>
        Follow board
      </Button>
    );
  }
}

export default connect(state => ({ user: state.user }), { followBoard })(FollowBoardButton);
