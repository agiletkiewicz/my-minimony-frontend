import React from 'react';
import { connect } from 'react-redux';
import Boards from '../components/boards/Boards';
import BoardInput from '../components/boards/BoardInput';

class BoardsContainer extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="styled-heading">Your boards</h1>
        <Boards boards={this.props.boards} />
        <BoardInput />
        <br />
        <h1 className="styled-heading">Followed boards</h1>
        <Boards boards={this.props.follows} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  follows: state.follows
});

export default connect(mapStateToProps)(BoardsContainer);
