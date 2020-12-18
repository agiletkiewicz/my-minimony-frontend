import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Board from './Board';

function Boards(props) {
  return (
    <Container>
      <br />
      <Row className="justify-content-center">
        <Col xs={10}>
          <CardColumns>
            {props.boards.map((board) => (
              <Board key={board.id} board={board} />
            ))}
          </CardColumns>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Boards;
