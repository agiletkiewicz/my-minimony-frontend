import React from 'react';
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar'

class PostsContainer extends React.Component {

    filteredPosts = () => {
        debugger
        this.props.posts.map( post => (
            post.title.includes(this.props.search) || post.description.includes(this.props.search)
        ))
    }

    render() {
        return (
        <div>
            <SearchBar />
            <Posts posts={this.props.posts} />
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