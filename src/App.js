import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import PostsContainer from './containers/PostsContainer';
import PostsInput from './components/PostsInput';
import PostShow from './components/PostShow';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/api/v1/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.loginStatus(); 
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

export default connect(mapStateToProps, {fetchPosts})(App);
