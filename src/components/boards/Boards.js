import React from 'react';
import Board from './Board'
import BoardInput from './BoardInput';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Boards(props) {

    return (
        <Container>
            <Row className="justify-content-md-center">
               <h2>Add a new board</h2>
            </Row>
            <Row className="justify-content-md-center">
                <BoardInput />
            </Row>
            <Row className="justify-content-md-center">
                {props.boards.map( board => (
                    <Board key={board.id} board={board.attributes} />
                ))}
             </Row>
        </Container>
    )

} 

export default Boards;