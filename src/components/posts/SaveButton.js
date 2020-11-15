import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { addSave } from '../../actions/addSave';

class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardId: null
        }
    }

    handleClick = (value) => {
        this.setState({
            boardId: parseInt(value)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSave(this.state.boardId, this.props.postId);
    }
    
    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
                onChange={event => this.handleClick(event.target.value)}
            >
                <option value="0">Choose a board...</option>
                {this.props.boards.map( board => {
                    return <option value={board.id} key={board.id}>{board.title}</option>
                })}
            </Form.Control>
            <Button type="submit" className="my-1">
                Save
            </Button>
        </Form>
        )
    }

} 

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps, { addSave })(SaveButton);