import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserPost(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.post.attributes.imageUrl} />
      <Card.Body>
        <Card.Title>{props.post.attributes.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`/posts/${props.post.attributes.id}`}>View</Card.Link>
        <Button
          variant="link"
          onClick={() => props.deletePost(props.post.attributes.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserPost;
