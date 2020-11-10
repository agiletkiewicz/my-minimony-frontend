import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import SaveButton from './SaveButton';
import { connect } from 'react-redux';
import Board from '../boards/Board';

 
class PostShow extends React.Component {  

  saved = () => {
    let board = false;
    for (const element of this.props.boards) {
        if (element.posts.includes(this.props.post.id)) {
            board = element
        }
    };
    return board;
  }

  renderButton = () => {
      let board = this.saved();
      if (board) {
        return <><h4>Saved to: </h4><Board key={board.id} board={board} /></>
      } else {
          return <SaveButton postId={this.props.post.id}/>
      };
  }
  
 
  render() {

    const hostURL = new URL(this.props.post.url).host;

    return (
        <Container>
            <Row>
                <Col xs={1}>
                    <Link to={"/"}>
                    <h2>{"<"}</h2>
                    </Link>
                    <br/>
                    home
                </Col>
                <Col>
                    <Image src={this.props.post.imageUrl} fluid />
                </Col>
                <Col>
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.description}</p>
                    <a href={this.props.post.url} target="_blank">Go to {hostURL}</a>
                    { this.renderButton() }
                </Col>
            </Row>
        </Container>
    );
}
}

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}
 
export default connect(mapStateToProps)(PostShow);