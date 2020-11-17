import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Board({ board }) {
  return (
    <Link to={`/boards/${board.id}`}>
      <Card>
        <Card.Body bsPrefix="board-heading">
          <Card.Text>{board.title}</Card.Text>
        </Card.Body>
        <Card.Img src={board.image} alt="Card image" />
      </Card>
    </Link>
  );
}

Board.propTypes = {
  board: PropTypes.object,
};

export default Board;
