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
      image: null,
      uploadImage: true
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.image === null && this.state.imageUrl === "") {
      this.props.addImageError();
      return;
    }

    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('url', this.state.url);
    formData.append('imageUrl', this.state.imageUrl);

    if (this.state.image) {
      formData.append('image', this.state.image);
    }

    this.props.addPost(formData, this.handleSuccess);
  };

  handleSuccess = (postId) => {
    this.setState({
      title: '',
      description: '',
      imageUrl: '',
      url: '',
      image: null, 
      uploadImage: true
    });
    this.props.history.push(`/posts/${postId}`);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }

  renderImageFormField = () => {
    if (this.state.uploadImage) {
      return (
        <>
        <Form.File id="formcheck-api-regular">
        <Form.File.Label>Upload Image</Form.File.Label>
          <Form.Row className="justify-content-md-center" >
            <Col sm={3}>
              <Form.File.Input 
                name="image" 
                accept="image/*" 
                onChange={this.handleImage}
                className="justify-content-md-center"
              />
           </Col>
        </Form.Row>
        </Form.File>
        <Button variant="link" onClick={() => this.setState({ uploadImage: false })}>or provide image url</Button>
        </>
      )
    } else {
        return (
          <>
          <Form.Label>Image URL</Form.Label>
            <Form.Control
            type="text"
            name="imageUrl"
            onChange={this.handleChange}
            value={this.state.imageUrl}
            />
          <Button variant="link" onClick={() => this.setState({ uploadImage: true })}>or upload image</Button>
          </>
        )
    }
  }

  render() {
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
                value={this.state.title}
              />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <br />
              {this.renderImageFormField()}
              {/* <Form.Label>Upload Image OR provide Image URL</Form.Label> */}
                  {/* <Form.File id="formcheck-api-regular">
                  <Form.File.Label>Upload Image OR provide Image URL</Form.File.Label>
                    <Form.Row className="justify-content-md-center" >
                      <Col sm={3}>
                        <Form.File.Input 
                          name="image" 
                          accept="image/*" 
                          onChange={this.handleImage}
                          className="justify-content-md-center"
                        />
                     </Col>
                  </Form.Row>
                  </Form.File> */}
              {/* <input type="file" name="image" accept="image/*" onChange={this.handleImage}/> */}
                  {/* <Form.Control
                    type="text"
                    name="imageUrl"
                    onChange={this.handleChange}
                    value={this.state.imageUrl}
                  /> */}

              <br />
              <br />
              <Form.Label>Source URL <i>(optional)</i></Form.Label>
              <Form.Control
                type="text"
                name="url"
                onChange={this.handleChange}
                value={this.state.url}
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

const mapDispatchToProps = (dispatch) => ({
  addPost: addPost(), 
  addImageError: () => { dispatch({ type: 'ADD_ERROR', error: "must include image" })}
})

export default connect(mapStateToProps, { addPost } )(PostsInput);
