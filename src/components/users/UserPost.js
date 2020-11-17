import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserPost({ post, deletePost }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={post.attributes.imageUrl} />
      <Card.Body>
        <Card.Title>{post.attributes.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`/posts/${post.attributes.id}`}>View</Card.Link>
        <Button variant="link" onClick={() => deletePost(post.attributes.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

UserPost.propTypes = {
  post: PropTypes.any,
  deletePost: PropTypes.func,
};

export default UserPost;
