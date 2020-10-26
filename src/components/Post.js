import React from 'react';

function Post(props) {

    return (
        <div> 
            <a href={props.post.url}>
                <img src={props.post.image_url} />
            </a>
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>
        </div>
    )

} 

export default Post;