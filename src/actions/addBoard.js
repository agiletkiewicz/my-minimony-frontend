import axios from 'axios';

export const addBoard = (data) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/api/v1/boards',
      { board: data },
      { withCredentials: true }
    )
    .then((response) => {

      if (response.data.error) {
        throw new Error(response.data.error)
      }

      dispatch({ type: 'ADD_BOARD', board: response.data.data });
      dispatch({ type: 'CLEAR_ERROR' });

    })
    .catch((response) =>
      dispatch({ type: 'ADD_ERROR', error: response.message })
    );
};
