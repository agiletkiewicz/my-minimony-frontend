import React from 'react';
import Post from './Post'
import CardColumns from 'react-bootstrap/CardColumns'


function Posts(props) {

    return (
        <CardColumns>
            {props.posts.map( post => (
                <Post key={post.id} post={post} />
            ))}
        </CardColumns>
    )

} 

export default Posts;