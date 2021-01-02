import axios from 'axios';

export const addPost = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'https://my-minimony.herokuapp.com/api/v1/posts', data,
      { withCredentials: true,     
        headers: { 'content-type': 'multipart/form-data' }
      }
    )
    .then((response) => {
      if (response.data.error) {
        throw new Error(response.data.error)
      } 
        
      dispatch({ type: 'ADD_POST', post: response.data.data });
      dispatch({ type: 'CLEAR_ERROR' });
      handleSuccess(response.data.data.attributes.id);

    })
    .catch((response) =>
      dispatch({ type: 'ADD_ERROR', error: response.message })
    );
};
