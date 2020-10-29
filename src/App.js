import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import PostsContainer from './containers/PostsContainer';
import PostsInput from './components/PostsInput';
import PostShow from './components/PostShow';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
}

  renderPost = (routerProps) => {
    let postId = parseInt(routerProps.match.params.id);
    let post = this.props.posts.find( obj => obj.id === postId );
    return ( post ? <PostShow post={post}/> : null)
  }

  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
            <Route exact path="/" component={PostsContainer} />
            <Route exact path="/posts/new" component={PostsInput} />
            <Route path="/posts/:id" render = {this.renderPost} />
            </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
