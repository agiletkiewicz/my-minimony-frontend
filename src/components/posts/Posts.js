import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Post from './Post';

function Posts(props) {
  return (
    <CardColumns>
      {props.posts.map((post) => (
        <Post key={post.id} post={post.attributes} />
      ))}
    </CardColumns>
  );
}

export default Posts;
