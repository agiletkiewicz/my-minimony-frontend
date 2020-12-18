import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteFollow } from '../../actions/deleteFollow';


class RemoveFollowButton extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteFollow(this.props.followId);
  };


  render() {
    return (
      <Button variant="danger" onClick={this.handleClick}>
        Unfollow board
      </Button>
    );
  }
}

export default connect(null, { deleteFollow })(RemoveFollowButton);
