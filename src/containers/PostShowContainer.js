import React, { Component } from 'react';
import PostShow from '../components/posts/PostShow';


class PostShowContainer extends Component {

    render() {
        return(
            <div>
                <PostShow post={this.props.post}/>
            </div>
        )
    }

}

export default PostShowContainer;