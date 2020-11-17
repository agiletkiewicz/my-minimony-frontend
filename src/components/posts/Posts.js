import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import Post from './Post';

function Posts({ posts }) {
  return (
    <CardColumns>
      {posts.map((post) => (
        <Post key={post.id} post={post.attributes} />
      ))}
    </CardColumns>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
