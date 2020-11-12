import React from 'react';
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar'

let scrollData = {};

class PostsContainer extends React.Component {

    getSnapshotBeforeUpdate(prevProps) {
        const {
          history: { action },
          location: { pathname }
        } = prevProps;
    
        if (action !== "POP") {
          scrollData = { ...scrollData, [pathname]: window.pageYOffset };
        }
    
        return null;
      }

    componentDidUpdate() {
    const {
        history: { action },
        location: { pathname }
    } = this.props;

    if (action === "POP") {
        if (scrollData[pathname]) {
        setTimeout(() =>
            window.scrollTo({
            left: 0,
            top: scrollData[pathname],
            behavior: "smooth"
            })
        );
        } else {
        setTimeout(window.scrollTo({ left: 0, top: 0 }));
        }
    } else {
        setTimeout(window.scrollTo({ left: 0, top: 0 }));
    }
    }


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