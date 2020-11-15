import React from 'react';
import Board from './Board';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';


function Boards(props) {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <CardColumns>
                        {props.boards.map( board => (
                            <Board key={board.id} board={board} />
                        ))}
                    </CardColumns>
                </Col>
             </Row>
        </Container>
    )

} 

export default Boards;