import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Board(props) {
  return (
    <div>
    <Link to={`/boards/${props.board.id}`}>
      {/* <Card>
        <Card.Body bsPrefix="board-heading">
          <Card.Text>{props.board.title}</Card.Text>
        </Card.Body>
        <Card.Img src={props.board.image} alt="Card image" />
      </Card> */}
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </Link>
    </div>
  );
}

export default Board;
