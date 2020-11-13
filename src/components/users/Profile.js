import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Profile(props) {
    return (
        <div>
            <h1 className="profile" id="heading">Profile</h1>
            <br />
            <h2>{props.user.name}</h2>
            <h4>Username: {props.user.username}</h4>
            <br />
        </div>
    )

} 

export default Profile;