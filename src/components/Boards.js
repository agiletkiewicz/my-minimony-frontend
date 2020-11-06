import React from 'react';
// import Post from './Post'
import CardColumns from 'react-bootstrap/CardColumns'


function Baords(props) {

    return (
        <CardColumns>
            {props.posts.map( post => (
                <Post key={post.id} post={post.attributes} />
            ))}
        </CardColumns>
    )

} 

export default Posts;