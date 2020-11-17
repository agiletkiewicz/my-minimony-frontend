import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Board from './Board';

function Boards({ boards }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10}>
          <CardColumns>
            {boards.map((board) => (
              <Board key={board.id} board={board} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}

Boards.propTypes = {
  boards: PropTypes.array,
};

export default Boards;
