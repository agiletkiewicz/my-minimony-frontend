import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Post(props) {
    return (
        <div>
       <Link to={`/posts/${props.post.id}`}>
        <Card>
            <Card.Img src={props.post.image_url} />
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
        </Link>
        </div>
    )

} 

export default Post;