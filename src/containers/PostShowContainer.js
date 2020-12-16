import React, { Component } from 'react';
import PostShow from '../components/posts/PostShow';


class PostShowContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: [],
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/posts/${this.props.post.id}/boards`)
            .then((resp) => resp.json())
            .then((response) => this.setState({ boards: response.data }))
            .catch( () => this.props.dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
    }

    render() {
        return(
            <div>
                <PostShow post={this.props.post}/>
                {console.log(this.state.boards)}
            </div>
        )
    }

}

export default PostShowContainer;