import React from 'react';
import Board from './Board'
import BoardInput from './BoardInput';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';


function Boards(props) {

    return (
        <Container>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs={10}>
                <h2>Add a new board</h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <BoardInput />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <CardDeck>
                        {props.boards.map( board => (
                            <Board key={board.id} board={board} />
                        ))}
                    </CardDeck>
                </Col>
             </Row>
        </Container>
    )

} 

export default Boards;