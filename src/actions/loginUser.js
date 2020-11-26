import axios from 'axios';

export const loginUser = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/api/v1/login',
      { user: data },
      { withCredentials: true }
    )
    .then((response) => {

      if (response.data.status === 401) {
        throw new Error(response.data.error)
      }

      dispatch({type: 'LOGIN_USER', user: response.data.user.data.attributes,});
      dispatch({ type: 'FETCH_BOARDS', boards: response.data.boards.data });
      dispatch({ type: 'FETCH_SAVES', saves: response.data.boards.included });
      dispatch({ type: 'CLEAR_ERROR' });
      handleSuccess();

    })
    .catch((response) =>
      dispatch({ type: 'ADD_ERROR', error: response.message })
    );
};
