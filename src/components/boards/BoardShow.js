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


    render() {

    return (
        <Container>
            <Row>
                <Col xs={1}>
                    <Link to={"/boards"}>
                    <h2>{"<"}</h2>
                    </Link>
                    <br/>
                    back
                </Col>
                <Col>
                    {console.log(this.state.posts)}
                    <Posts posts={this.state.posts}/>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default BoardShow;