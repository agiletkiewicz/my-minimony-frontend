export function fetchPosts() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/posts')
      .then((resp) => resp.json())
      .then((parsedResp) => {
        dispatch({ type: 'FETCH_POSTS', posts: parsedResp });
        dispatch({ type: 'CLEAR_ERROR' });
      })
      .catch((error) =>
        dispatch({
          type: 'ADD_ERROR',
          error: 'Something went wrong. Try again.',
        })
      );
  };
}
