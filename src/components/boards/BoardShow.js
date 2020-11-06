import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';
import { addBoard } from '../../actions/addBoard';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

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
        <>
        {console.log(this.state.posts)}
        hello
        </>
    )
    }
}

export default BoardShow;