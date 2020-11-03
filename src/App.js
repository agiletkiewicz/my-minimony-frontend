import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import { logoutUser } from './actions/logoutUser';
import PostsContainer from './containers/PostsContainer';
import PostsInput from './components/PostsInput';
import PostShow from './components/PostShow';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import { fetchLoginStatus  } from './actions/fetchLoginStatus';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {


  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLoginStatus(); 
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
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            </Switch>
        </Router>
        {console.log(this.state)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchLoginStatus, logoutUser })(App);
