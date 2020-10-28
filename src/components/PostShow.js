import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
 
const PostShow = props => {
 
  return (
    <Container>
        <Row>
            <Col>
                <Image src={props.post.image_url} fluid />
            </Col>
            <Col>
                <h3>{props.post.title}</h3>
                <p>{props.post.description}</p>
                <a href={props.post.url} target="_blank">Go to website</a>
            </Col>
        </Row>
    </Container>
  );
}
 
export default PostShow;