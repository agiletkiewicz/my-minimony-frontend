export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    fetch('https://my-minimony.herokuapp.com/api/v1/posts')
      .then((resp) => resp.json())
      .then((parsedResp) => {
        dispatch({ type: 'FETCH_POSTS', posts: parsedResp });
        dispatch({ type: 'CLEAR_ERROR' });
        dispatch({ type: 'FINISH_LOADING' });
      })
      .catch((error) => {
        dispatch({
          type: 'ADD_ERROR',
          error: 'Something went wrong. Try again.',
        });
        dispatch({ type: 'FINISH_LOADING' });
      });
  };
}
