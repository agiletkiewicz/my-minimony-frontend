import axios from 'axios';

export const loginUser = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/api/v1/login',
      { user: data },
      { withCredentials: true }
    )
    .then((response) => {
      
      if (!response.data.logged_in) {
        return dispatch({ type: 'ADD_ERROR', error: response.data.error });
      }

      dispatch({type: 'LOGIN_USER', user: response.data.user.data.attributes,});
      dispatch({ type: 'FETCH_BOARDS', boards: response.data.boards.data });
      dispatch({ type: 'FETCH_SAVES', saves: response.data.boards.included });
      dispatch({ type: 'CLEAR_ERROR' });
      handleSuccess();

    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
