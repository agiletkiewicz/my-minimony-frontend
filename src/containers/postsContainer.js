import React from 'react';
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar'

class PostsContainer extends React.Component {


    render() {

        let posts = this.props.posts;
        if (this.props.search.length > 0) {
            posts = this.props.posts.filter( post => (
                post.attributes.title.toLowerCase().includes(this.props.search) || post.attributes.description.toLowerCase().includes(this.props.search)
            ));
        }

        return (
        <div>
            <SearchBar />
            <Posts posts={posts} />
        </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        posts: state.posts,
        search: state.search
    }
}


export default connect(mapStateToProps)(PostsContainer);