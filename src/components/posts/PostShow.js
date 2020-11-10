import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import SaveButton from './SaveButton'


 
class PostShow extends React.Component {  

  
 
  render() {

    const hostURL = new URL(this.props.post.url).host;

    return (
        <Container>
            <Row>
                <Col xs={1}>
                    <Link to={"/"}>
                    <h2>{"<"}</h2>
                    </Link>
                    <br/>
                    home
                </Col>
                <Col>
                    <Image src={this.props.post.imageUrl} fluid />
                </Col>
                <Col>
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.description}</p>
                    <a href={this.props.post.url} target="_blank">Go to {hostURL}</a>
                    <SaveButton postId={this.props.post.id}/>
                </Col>
            </Row>
        </Container>
    );
}
}
 
export default PostShow;