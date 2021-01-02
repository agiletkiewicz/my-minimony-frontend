export const deleteFollow = (followId) => (dispatch) => {
    fetch(`https://my-minimony.herokuapp.com/api/v1/follows/${followId}`, {
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
  