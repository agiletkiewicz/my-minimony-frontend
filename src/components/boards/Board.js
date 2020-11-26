import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Board(props) {
  return (
    <div>
    <Link to={`/boards/${props.board.id}`}>
      <Card>
        <Card.Body bsPrefix="board-heading">
          <Card.Text>{props.board.title}</Card.Text>
        </Card.Body>
        <Card.Img src={props.board.image} alt="Card image" />
      </Card>
    </Link>
    </div>
  );
}

export default Board;
