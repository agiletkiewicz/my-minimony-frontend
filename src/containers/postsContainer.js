import React from 'react';
import Posts from '../components/Posts'
import { fetchPosts } from '../actions/fetchPosts';
import { connect } from 'react-redux';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    sortPosts = () => {
        return this.props.posts.sort(function(a, b) {
            if (a.created_at > b.created_at) {
              return -1;
            }
            if (a.created_at < b.created_at) {
              return 1;
            }
            return 0;
        });
    }

    render() {
        return <div><Posts posts={this.sortPosts()}/></div>
    }
} 

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {fetchPosts})(PostsContainer);