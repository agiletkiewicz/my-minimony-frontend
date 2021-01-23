import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import RemoveBoardButton from './RemoveBoardButton';
import FollowBoardButton from './FollowBoardButton';
import RemoveFollowButton from './RemoveFollowButton';
import BoardShowPost from './BoardShowPost';

class BoardShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      board: {}
    };
  }

  componentDidMount() {
    fetch(`http:localhost:3000/api/v1/boards/${this.props.boardId}`)
      .then((resp) => resp.json())
      .then((parsedResp) => {
        this.setState({ posts: parsedResp.posts.data });
        this.setState({ board: parsedResp.board.data.attributes })
      });
  }

  ownedBoard = () => {
    const board = this.props.boards.find( board => (
      board.id === this.state.board.id
    ))

    let save = false;
    for (const element of this.props.follows) {
      if (element.boardId === this.props.boardId) {
        save = element;
      }
    }

    if (board) {
      return <RemoveBoardButton board={board} history={this.props.history}/>
    } else if (save) {
      return <RemoveFollowButton followId={save.id} />
    } else {
      return <FollowBoardButton boardId={this.state.board.id} />
    }
  }

  renderPosts = () => {
    if (this.state.posts.length > 0) {
      return (
        <>
          <CardColumns>
            {this.state.posts.map((post) => (
              <BoardShowPost post={post.attributes} />
            ))}
          </CardColumns>
        </>
      );
    }
    return (
      <>
        <br />
        <h4 className="styled-heading">No posts yet!</h4>
        <Link to="/posts">
          <Button variant="link">Start browsing</Button>
        </Link>
      </>
    );
  };

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col>
            <br />
            <h4 className="styled-heading">{this.state.board.title}</h4>
            <br />
            {this.renderPosts()}
          </Col>
        </Row>
        <br />
        <br />
        <Row className="justify-content-md-center">
          {this.ownedBoard()}
        </Row>
        <br />
      </Container>
    );
  }
}

export default connect(state => ({ boards: state.boards, follows: state.follows }))(BoardShow);
