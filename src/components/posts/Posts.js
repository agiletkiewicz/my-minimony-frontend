import React from 'react';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import Post from './Post';
import Spinner from 'react-bootstrap/Spinner';


function Posts(props) {

  if (props.loading) {
    return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    )}

  return (
    <CardColumns>
      {props.posts.map((post) => (
        <Post key={post.id} post={post.attributes} />
      ))}
    </CardColumns>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Posts);
