import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import SearchBar from '../components/SearchBar';

let scrollData = {};

class PostsContainer extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const {
      history: { action },
      location: { pathname },
    } = prevProps;

    if (action !== 'POP') {
      scrollData = { ...scrollData, [pathname]: window.pageYOffset };
    }

    return null;
  }

  componentDidUpdate() {
    const {
      history: { action },
      location: { pathname },
    } = this.props;

    if (action === 'POP') {
      if (scrollData[pathname]) {
        setTimeout(() =>
          window.scrollTo({
            left: 0,
            top: scrollData[pathname],
            behavior: 'smooth',
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
    let { posts, search } = this.props;

    if (search.length > 0) {
      posts = posts.filter(
        (post) =>
          post.attributes.title.toLowerCase().includes(search) ||
          post.attributes.description.toLowerCase().includes(search)
      );
    }

    return (
      <>
        <SearchBar />
        <div className="posts-container">
          <Posts posts={posts} />
        </div>
      </>
    );
  }
}

PostsContainer.propTypes = {
  history: PropTypes.any,
  location: PropTypes.any,
  search: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  search: state.search,
});

export default connect(mapStateToProps)(PostsContainer);
