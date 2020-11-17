import axios from 'axios';

export const logoutUser = () => (dispatch) => {
  axios
    .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
    .then(() => {
      dispatch({ type: 'LOGOUT_USER' });
      dispatch({ type: 'CLEAR_ERROR' });
    })
    .catch(() =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
