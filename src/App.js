import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';

class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/posts')
  //   .then(resp => resp.json())
  //   .then(parsedResp => console.log(parsedResp))
  // }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   }
// }

export default connect(null, {fetchPosts})(App);
