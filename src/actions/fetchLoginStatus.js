import axios from 'axios';

export const fetchLoginStatus = () => (dispatch) => {
  axios
    .get('http://localhost:3000/api/v1/logged_in', { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in) {
        dispatch({
          type: 'LOGIN_USER',
          user: response.data.user.data.attributes,
        });
        console.log(response)
        dispatch({ type: 'FETCH_BOARDS', boards: response.data.boards.data });
        dispatch({ type: 'FETCH_SAVES', saves: response.data.boards.included });
        dispatch({ type: 'FETCH_FOLLOWS', follows: response.data.follows.data });
        dispatch({ type: 'CLEAR_ERROR' });
      }
    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
