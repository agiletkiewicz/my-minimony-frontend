import React from 'react';

function Profile(props) {
  return (
    <div>
      <h1 className="styled-heading">Profile</h1>
      <br />
      <h2>{props.user.name}</h2>
      <h4>Username: {props.user.username}</h4>
      <br />
    </div>
  );
}

export default Profile;
