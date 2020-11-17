import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BoardShowPost({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="home-page">
      <Card>
        {console.log(post)}
        <Card.Img src={post.imageUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

BoardShowPost.propTypes = {
  post: PropTypes.object,
};

export default BoardShowPost;
