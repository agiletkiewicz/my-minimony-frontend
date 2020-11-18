import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Jumbotron fluid className="jumbotron home">
      <h1>My Minimony</h1>
      <p>Share and save ideas for your small wedding.</p>
      <p>
        <Link to="/posts">
          <Button variant="secondary">Start browsing</Button>
        </Link>
      </p>
    </Jumbotron>
  );
}

export default Home;
