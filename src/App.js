import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import { logoutUser } from './actions/logoutUser';
import PostsContainer from './containers/PostsContainer';
import BoardsContainer from './containers/BoardsContainer';
import UserContainer from './containers/UserContainer';
import PostsInput from './components/posts/PostsInput';
import PostShow from './components/posts/PostShow';
import BoardShow from './components/boards/BoardShow';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Error from './components/Error';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import { fetchLoginStatus  } from './actions/fetchLoginStatus';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {


  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLoginStatus(); 
}

  renderPost = (routerProps) => {
    let postId = parseInt(routerProps.match.params.id);
    let post = this.props.posts.find( obj => parseInt(obj.id) === postId );
    return ( post ? <PostShow post={post.attributes}/> : null)
  }

  renderBoard = (routerProps) => {
    let boardId = parseInt(routerProps.match.params.id);
    let board = this.props.boards.find( obj => parseInt(obj.id) === boardId );
    return ( board ? <BoardShow board={board} {...routerProps}/> : null)
  }

  renderUser = (routerProps) => {
    let userId = this.props.user.id;
    return ( userId ? <UserContainer userId={userId} {...routerProps}/> : null)
  }


  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Error />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:id" render={this.renderUser} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route exact path="/posts/new" component={PostsInput} />
            <Route path="/posts/:id" render={this.renderPost} />
            <Route exact path="/boards" component={BoardsContainer} />
            <Route path="/boards/:id" render={this.renderBoard}/>
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} />
              )}
            />
            </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      posts: state.posts,
      errors: state.errors,
      boards: state.boards,
      user: state.user
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchLoginStatus, logoutUser })(App);
