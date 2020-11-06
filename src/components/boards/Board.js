import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Board(props) {
    return (
        <Card>
            <Card.Header>
            <Link to={`/boards/${props.board.id}`}>{props.board.title}</Link>
            {console.log(props)}
            </Card.Header>
       {/* <Link to={`/posts/${props.post.id}`} className="home-page">
        <Card>
            <Card.Img src={props.post.imageUrl} />
            <Card.ImgOverlay>
                <Button variant="primary" type="submit" size="sm" disabled>
                    Save
                </Button>{' '}
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
            <Card.Text>{props.post.description.slice(0,149)}{props.post.description.length > 149 ? "..." : ""}</Card.Text>
            </Card.Body>
        </Card>
        </Link> */}
        </Card>
    )

} 

export default Board;