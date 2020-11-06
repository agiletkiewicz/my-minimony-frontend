import React from 'react';
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';

class PostsContainer extends React.Component {


    render() {
        return <div><Posts posts={this.props.posts}/></div>
    }
} 

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(PostsContainer);