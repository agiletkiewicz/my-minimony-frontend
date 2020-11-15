import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPost from '../components/users/UserPost';
import Profile from '../components/users/Profile';
import CardColumns from 'react-bootstrap/CardColumns';


class UserContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts: []
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/posts`)
    .then(resp => resp.json())
    .then(parsedResp => {
        this.setState({ posts: parsedResp.data })
    })
  }

  deletePost = (postId) => {
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(parsedResp => this.setState({
        posts: this.state.posts.filter( post => post.attributes.id !== postId)
    }))
    // .catch(error => dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
  }




    render() {

    return (
        <div>
            <br />
            <Profile user={this.props.user} />
            <br />
            <h3>Your posts:</h3>
            <br />
            <div className="posts-container">
                <CardColumns>
                    {this.state.posts.map( post => (
                        <UserPost post={post} deletePost={this.deletePost} key={post.attributes.id}/>
                    ))}
                </CardColumns>
            </div>
        </div>
    )
    }
}

export default connect(null)(UserContainer);