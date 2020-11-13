import React from 'react';
import Boards from '../components/boards/Boards';
import BoardInput from '../components/boards/BoardInput';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function Home(props) {

        return ( 

            
            // <div className="jumbotron">
            <Jumbotron fluid className="jumbotron home">
                <h1>My Minimony</h1>
                <p>
                    Share and save ideas for your small wedding.
                </p>
                <p>
                    <Link to="/posts">
                        <Button variant="secondary" >Start browsing</Button>
                    </Link>
                </p>
            </Jumbotron>
            // </div>

            
        )
} 


export default Home;