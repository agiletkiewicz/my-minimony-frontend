import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import { logoutUser } from './actions/logoutUser';
import PostsContainer from './containers/PostsContainer';
import BoardsContainer from './containers/BoardsContainer';
import PostsInput from './components/posts/PostsInput';
import PostShow from './components/posts/PostShow';
import BoardShow from './components/boards/BoardShow';
import NavBar from './components/NavBar';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import Alert from 'react-bootstrap/Alert';
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
    return ( board ? <BoardShow board={board}/> : null)
  }


  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            {this.props.errors.length > 0 ? <Alert inline variant={'danger'}>{this.props.errors.map(error => <p>{error}</p>)}</Alert> : null }
            <Switch>
            <Route exact path="/" component={PostsContainer} />
            <Route exact path="/posts/new" component={PostsInput} />
            <Route path="/posts/:id" render = {this.renderPost} />
            <Route exact path="/boards" component={BoardsContainer} />
            <Route path="/boards/:id" render = {this.renderBoard} />
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
      boards: state.boards
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchLoginStatus, logoutUser })(App);
