import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';


class UserContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts: []
     };
  }

  componentDidMount() {
        fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/posts`)
        .then(resp => resp.json())
        .then(parsedResp => {
            this.setState({ posts: parsedResp.data })
        })
  }


    render() {

    return (
        <Container>
            {console.log(this.state.posts)}
        </Container>
    )
    }
}

export default UserContainer;