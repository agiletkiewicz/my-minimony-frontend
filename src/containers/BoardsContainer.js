import React from 'react';
import { connect } from 'react-redux';
import Boards from '../components/boards/Boards';
import BoardInput from '../components/boards/BoardInput';

class BoardsContainer extends React.Component {
  render() {
    return (
      <div>
        <Boards boards={this.props.boards} />
        <BoardInput />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(BoardsContainer);
