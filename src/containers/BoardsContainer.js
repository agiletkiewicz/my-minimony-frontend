import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Boards from '../components/boards/Boards';
import BoardInput from '../components/boards/BoardInput';

class BoardsContainer extends React.Component {
  render() {
    const { boards } = this.props;

    return (
      <div>
        <br />
        <h1 className="styled-heading">Boards</h1>
        <br />
        <Boards boards={boards} />
        <br />
        <BoardInput />
        <br />
        <br />
      </div>
    );
  }
}

BoardsContainer.propTypes = {
  boards: PropTypes.array,
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(BoardsContainer);
