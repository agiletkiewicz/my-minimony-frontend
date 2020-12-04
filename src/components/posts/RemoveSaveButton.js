import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteSave } from '../../actions/deleteSave';

function RemoveSaveButton(props) {

  const handleClick = (event) => {
    event.preventDefault();
    props.deleteSave(props.save.id);
  };

    return (
      <>
        <br />
        <br />
        <Button variant="light" onClick={handleClick}>
          Remove from <b>{props.board.title}</b> board
        </Button>
      </>
    )
}

export default connect(null, { deleteSave })(RemoveSaveButton);
