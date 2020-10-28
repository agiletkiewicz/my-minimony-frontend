import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router-dom';
import PostShow from './PostShow'

function Post(props) {
    return (
        <Card>
            <a href={props.post.url} target="_blank">
                <Card.Img src={props.post.image_url} />
            </a>
            <Card.ImgOverlay>
                <Button variant="primary" type="submit" size="sm" disabled>
                    Save
                </Button>{' '}
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>{props.post.description}</Card.Text>
            </Card.Body>
        </Card>
    )

} 

export default Post;