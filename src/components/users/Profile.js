import React from 'react';
import PropTypes from 'prop-types';

function Profile({ user }) {
  return (
    <div>
      <h1 className="styled-heading">Profile</h1>
      <br />
      <h2>{user.name}</h2>
      <h4>Username: {user.username}</h4>
      <br />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
