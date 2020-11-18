import React from 'react';

function Profile(props) {
  return (
    <div>
      <br />
      <h1 className="styled-heading">Profile</h1>
      <br />
      <h2>{props.user.name}</h2>
      <h4>Username: {props.user.username}</h4>
      <br />
      <br />
      <br />
      <h3>Your posts:</h3>
      <br />
    </div>
  );
}

export default Profile;
