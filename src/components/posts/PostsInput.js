import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { addPost } from '../../actions/addPost';

class PostsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageUrl: '',
      url: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state, this.handleSuccess);
  };

  handleSuccess = (postId) => {
    this.setState({
      title: '',
      description: '',
      imageUrl: '',
      url: '',
    });
    this.props.history.push(`/posts/${postId}`);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title, description, imageUrl, url } = this.state;

    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Add a new post</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={this.handleChange}
                value={description}
              />
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                onChange={this.handleChange}
                value={imageUrl}
              />
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                name="url"
                onChange={this.handleChange}
                value={url}
              />
              <br />
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

export default connect(mapStateToProps, { addPost })(PostsInput);
