import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';


class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardId: null
        }
    }

    handleClick = (value) => {
        this.setState({
            boardId: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/v1/boardspost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                boardId: this.state.boardId, 
                postId: this.props.postId
            }),
        })
        .then(resp => resp.json())
        .then(parsedResp => {console.log(parsedResp)})
    
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
                    return <option value={board.attributes.id}>{board.attributes.title}</option>
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

export default connect(mapStateToProps)(SaveButton);