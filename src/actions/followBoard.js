export const followBoard = (boardId, userId) => (dispatch) => {
    fetch('http://localhost:3000/api/v1/follows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ boardId, userId }),
    })
      .then((resp) => resp.json())
      .then((parsedResp) =>
        dispatch({ type: 'ADD_FOLLOW', follow: parsedResp.follow.data.attributes })
      )
      .catch((error) =>
        dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
      );
  };