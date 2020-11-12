import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { deleteBoard } from '../../actions/deleteBoard';
import Board from '../boards/Board';

class RemoveBoardButton extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.deleteBoard(this.props.board.id);
        this.props.history.push('/boards');
    }

    render() {
        return (
        <Button variant="danger" onClick={this.handleClick}>Delete board</Button>
        )
    }

} 


export default connect(null, { deleteBoard })(RemoveBoardButton);