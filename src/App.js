import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import PostsContainer from './containers/PostsContainer'
import PostsInput from './components/PostsInput'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={PostsContainer} />
          <Route path="/posts/new" component={PostsInput} />
        </Router>
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(App);
