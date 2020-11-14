import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'


function Board(props) {
    return (
        <Link to={`/boards/${props.board.id}`}>
        {/* <Card bg={"info"} text={'white'}>
            <Card.Header>
            {props.board.title}
            </Card.Header> */}
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
        {/* </Card> */}
        {/* <Card className="bg-dark text-white"> */}
        <Card>
            {/* <Card.ImgOverlay> */}
                <Card.Body bsPrefix={"board-heading"}>
                    <Card.Text>
                        <p>{props.board.title}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img src={props.board.image} alt="Card image" />
            {/* </Card.ImgOverlay> */}
        </Card>
        </Link>
    )

} 

export default Board;