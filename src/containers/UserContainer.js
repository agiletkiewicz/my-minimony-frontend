import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import UserPost from '../components/users/UserPost';
import Profile from '../components/users/Profile';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`https://my-minimony.herokuapp.com/api/v1/users/${this.props.user.id}/posts`)
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
        this.setState( previousState => ({
          posts: previousState.posts.filter(
            (post) => post.attributes.id !== postId
          ),
        }))
      )
      .catch( () => this.props.dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
  };

  render() {
    return (
      <div>
        <Profile user={this.props.user} />
        <div className="posts-container">
          <CardColumns>
            {this.state.posts.map((post) => (
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

export default connect(state => ({ user: state.user }))(UserContainer);
