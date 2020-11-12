import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import SaveButton from './SaveButton';
import RemoveSaveButton from './RemoveSaveButton';
import { connect } from 'react-redux';
import Board from '../boards/Board';

 
class PostShow extends React.Component {  

  saved = () => {
    let save = false;
    for (const element of this.props.saves) {
        if (element.postId === this.props.post.id) {
            save = element
        }
    };
    return save;
  }

  renderButton = () => {
      let save = this.saved();
      if (save) {
        const savedBoard = this.props.boards.find( board => board.id === save.boardId ) 
        return <RemoveSaveButton save={save} board={savedBoard}/>
      } else {
          return <SaveButton postId={this.props.post.id}/>
      };
  }
  
 
  render() {

    const hostURL = new URL(this.props.post.url).host;

    return (
        <Container>
            <br />
            <Row>
                <Col xs={1}>
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
        boards: state.boards,
        saves: state.saves
    }
}
 
export default connect(mapStateToProps)(PostShow);