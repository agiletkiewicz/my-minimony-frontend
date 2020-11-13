import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function UserPost(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.post.attributes.imageUrl} />
            <Card.Body>
                <Card.Title>{props.post.attributes.title}</Card.Title>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">View</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    )

} 

export default UserPost;