import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts')
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
