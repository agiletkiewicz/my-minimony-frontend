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