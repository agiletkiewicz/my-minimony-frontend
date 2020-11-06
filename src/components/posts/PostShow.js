import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
 
const PostShow = props => {

  const hostURL = new URL(props.post.url).host;
 
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
                <Image src={props.post.image_url} fluid />
            </Col>
            <Col>
                <h3>{props.post.title}</h3>
                <p>{props.post.description}</p>
            <a href={props.post.url} target="_blank">Go to {hostURL}</a>
            </Col>
        </Row>
    </Container>
  );
}
 
export default PostShow;