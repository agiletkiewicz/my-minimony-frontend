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
      <Card>
        <Card.Body bsPrefix="board-heading">
          <Card.Text>{props.board.title}</Card.Text>
        </Card.Body>
        <Card.Img src={props.board.image} alt="Card image" />
      </Card>
      {/* <Card>
        <Card.Body bsPrefix="board-heading">
          <Card.Text>{props.board.title}</Card.Text>
        </Card.Body>
        <Container>
          <Row>
            <Col><Image src={props.board.imageOne} fluid/></Col>
            <Col><Image src={props.board.imageTwo} fluid/></Col>
          </Row>
          <Row>
            <Col><Image src={props.board.imageThree} fluid/></Col>
            <Col><Image src={props.board.imageFour} fluid/></Col>
          </Row>
        </Container>
      </Card> */}
    </Link>
    </div>
  );
}

export default Board;
