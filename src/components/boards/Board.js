import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Board(props) {
    return (
        <Link to={`/boards/${props.board.id}`}>
            <Card>
                    <Card.Body bsPrefix={"board-heading"}>
                        <Card.Text>
                            <p>{props.board.title}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img src={props.board.image} alt="Card image" />
            </Card>
        </Link>
    )

} 

export default Board;