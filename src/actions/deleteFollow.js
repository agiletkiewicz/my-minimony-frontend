export const deleteFollow = (followId) => (dispatch) => {
    fetch(`http://localhost:3000/api/v1/follows/${followId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((parsedResp) => dispatch({ type: 'DELETE_FOLLOW', follow: followId }))
      .catch((error) =>
        dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
      );
  };
  