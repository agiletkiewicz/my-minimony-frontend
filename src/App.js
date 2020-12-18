import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchPosts } from './actions/fetchPosts';
import { fetchLoginStatus } from './actions/fetchLoginStatus';
import PostsContainer from './containers/PostsContainer';
import BoardsContainer from './containers/BoardsContainer';
import UserContainer from './containers/UserContainer';
import PostsInput from './components/posts/PostsInput';
import PostShow from './components/posts/PostShow';
import BoardShow from './components/boards/BoardShow';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Error from './components/Error';
import Signup from './components/users/Signup';
import PostShowContainer from './containers/PostShowContainer';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLoginStatus();
  }

  renderPost = (routerProps) => {
    const postId = parseInt(routerProps.match.params.id);
    const post = this.props.posts.find((obj) => parseInt(obj.id) === postId);
    return post ? <PostShowContainer post={post.attributes} /> : null;
  };

  renderBoard = (routerProps) => {
    const boardId = parseInt(routerProps.match.params.id);
    const board = this.props.boards.find((obj) => parseInt(obj.id) === boardId);
    return <BoardShow board={board} boardId={boardId} {...routerProps} />;
  };

  renderUser = (routerProps) => {
    const userId = this.props.user.id;
    return userId ? ( <UserContainer {...routerProps} /> ) : null;
  };

  error = () => {
    return this.props.errors.length > 0
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          {this.error() && <Error />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:id" render={this.renderUser} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route exact path="/posts/new" render={(props) => <PostsInput {...props} />} />
            <Route path="/posts/:id" render={this.renderPost} />
            <Route exact path="/boards" component={BoardsContainer} />
            <Route path="/boards/:id" render={this.renderBoard} />
            <Route exact path="/signup" render={(props) => <Signup {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  errors: state.errors,
  boards: state.boards,
  user: state.user,
});

export default connect(mapStateToProps, {
  fetchPosts,
  fetchLoginStatus,
})(App);
