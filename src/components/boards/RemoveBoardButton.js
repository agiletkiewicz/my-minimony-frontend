import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteBoard } from '../../actions/deleteBoard';
import { Redirect } from 'react-router-dom';

class RemoveBoardButton extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.deleteBoard(this.props.board.id, this.handleSuccess);
    }

    handleSuccess = () => { 
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/boards' />
        }
        return (
            <Button variant="danger" onClick={this.handleClick}>Delete board</Button>
        )
    }
} 


export default connect(null, { deleteBoard })(RemoveBoardButton);