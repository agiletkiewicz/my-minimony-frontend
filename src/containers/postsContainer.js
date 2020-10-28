import React from 'react';
import Posts from '../components/Posts'
import { fetchPosts } from '../actions/fetchPosts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div><Posts posts={this.props.posts}/></div>
    }
} 

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {fetchPosts})(PostsContainer);