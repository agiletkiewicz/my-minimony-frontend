import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import PropTypes from 'prop-types';
import UserPost from '../components/users/UserPost';
import Profile from '../components/users/Profile';

class UserContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/posts`)
      .then((resp) => resp.json())
      .then((parsedResp) => {
        this.setState({ posts: parsedResp.data });
      });
  }

  deletePost = (postId) => {
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() =>
        this.setState((prevState) => ({
          posts: prevState.posts.filter(
            (post) => post.attributes.id !== postId
          ),
        }))
      );
    // .catch(error => dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
  };

  render() {
    const { user } = this.props;
    const { posts } = this.state;

    return (
      <div>
        <br />
        <Profile user={user} />
        <br />
        <h3>Your posts:</h3>
        <br />
        <div className="posts-container">
          <CardColumns>
            {posts.map((post) => (
              <UserPost
                post={post}
                deletePost={this.deletePost}
                key={post.attributes.id}
              />
            ))}
          </CardColumns>
        </div>
      </div>
    );
  }
}

UserContainer.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(null)(UserContainer);
