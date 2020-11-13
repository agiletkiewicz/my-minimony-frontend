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
            <p>{props.user.name}</p>
            <p>Username: {props.user.username}</p>
            <br />
        </div>
    )

} 

export default Profile;