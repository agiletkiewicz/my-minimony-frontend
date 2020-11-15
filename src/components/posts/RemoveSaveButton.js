import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteSave } from '../../actions/deleteSave';

class RemoveSaveButton extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.deleteSave(this.props.save.id);
    }

    render() {
        return (
            <>
                <br />
                <br />
                <Button variant="light" onClick={this.handleClick}>Remove from <b>{this.props.board.title}</b> board</Button>
            </>
        )
    }

} 


export default connect(null, { deleteSave })(RemoveSaveButton);