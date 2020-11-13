import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function UserPost(props) {
    return (
    <div className="img-hover-zoom">
            <Card>
                <Card.Img src={props.post.imageUrl}/>
                <Card.ImgOverlay>
                    {/* <Button variant="primary" type="submit" size="sm" disabled>
                        Save
                    </Button>{' '} */}
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>{props.post.description.slice(0,149)}{props.post.description.length > 149 ? "..." : ""}</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
     </div>
    )

} 

export default UserPost;