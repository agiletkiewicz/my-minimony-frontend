import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BoardShowPost(props) {
    return (
       <Link to={`/posts/${props.post.id}`} className="home-page">
            <Card>
                {console.log(props.post)}
                <Card.Img src={props.post.imageUrl}/>
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )

} 

export default BoardShowPost;