import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { deleteSave } from '../../actions/deleteSave';
import Board from '../boards/Board';

class RemoveSaveButton extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.deleteSave(this.props.save.id);
    }

    render() {
        return (
            <>
                <br />
                {/* <h4>Saved to: </h4> */}
                {/* <Board key={this.props.board.id} board={this.props.board} /> */}
                <br />
                <Button variant="light" onClick={this.handleClick}>Remove from board</Button>
            </>
        )
    }

} 


export default connect(null, { deleteSave })(RemoveSaveButton);