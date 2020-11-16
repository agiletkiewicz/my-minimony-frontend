import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Post(props) {
  return (
    <div className="img-hover-zoom">
      <Link to={`/posts/${props.post.id}`} className="home-page">
        <Card>
          <Card.Img src={props.post.imageUrl} />
          <Card.Body>
            <Card.Title>{props.post.title}</Card.Title>
            <Card.Text>
              {props.post.description.slice(0, 149)}
              {props.post.description.length > 149 ? '...' : ''}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Post;
