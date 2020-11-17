import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="img-hover-zoom">
      <Link to={`/posts/${post.id}`} className="home-page">
        <Card>
          <Card.Img src={post.imageUrl} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.description.slice(0, 149)}
              {post.description.length > 149 ? '...' : ''}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
