import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import UserPost from '../components/users/UserPost';
import Profile from '../components/users/Profile';
import CardDeck from 'react-bootstrap/CardDeck'


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


    render() {

    return (
        <div>
            <br />
            <Profile user={this.props.user} />
            <br />
            <h3>Your posts</h3>
            <br />
            <CardDeck>
                {this.state.posts.map( post => (
                    <UserPost post={post} />
                ))}
            </CardDeck>
        </div>
    )
    }
}

export default UserContainer;