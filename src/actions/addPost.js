import axios from 'axios';

export const addPost = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/api/v1/posts',
      { post: data },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.error) {
        return dispatch({ type: 'ADD_ERROR', error: response.data.error });
      } 
        
      dispatch({ type: 'ADD_POST', post: response.data.data });
      dispatch({ type: 'CLEAR_ERROR' });
      handleSuccess(response.data.data.attributes.id);

    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
