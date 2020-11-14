import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';
import { addBoard } from '../../actions/addBoard';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Posts from '../posts/Posts';
import RemoveBoardButton from './RemoveBoardButton';

class BoardShow extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts: []
     };
  }

  componentDidMount() {
      fetch(`http://localhost:3000/api/v1/boards/${this.props.board.id}`)
      .then(resp => resp.json())
      .then(parsedResp => {
          this.setState({ posts: parsedResp.data })
      })
  }

  renderPosts = () => {
    if (this.state.posts.length > 0) {
        return (
            <>
                <Posts posts={this.state.posts}/>
            </>
        )
    } else {
        return (
            <>
                <br />
                <h4 className="styled-heading">No posts yet!</h4>
                <Link to="/posts">
                    <Button variant="link">Start browsing</Button>
                </Link>
            </>
        )
    }
  }


    render() {

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <br />
                    <h4 className="styled-heading">{this.props.board.title}</h4>
                    <br />
                    {this.renderPosts()}
                </Col>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
                <RemoveBoardButton board={this.props.board} history={this.props.history}/>
            </Row>
            <br />
        </Container>
    )
    }
}

export default BoardShow;