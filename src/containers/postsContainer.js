import React from 'react';
import Posts from '../components/Posts'
import { fetchPosts } from '../actions/fetchPosts';
import { connect } from 'react-redux';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div><Posts /></div>
    }
} 



export default connect(null, {fetchPosts})(PostsContainer);