import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class PostsInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            imageURL: "",
            url: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            title: "",
            description: "",
            imageURL: "",
            url: ""
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <h2>Add a new post</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" onChange={this.handleChange} value={this.state.description}/>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" name="imageURL" onChange={this.handleChange} value={this.state.imageURL}/>
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" name="url" onChange={this.handleChange} value={this.state.url}/>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        )
    }

} 

export default PostsInput;