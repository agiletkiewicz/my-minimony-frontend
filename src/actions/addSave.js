export const addSave = (boardId, postId) => (dispatch) => {
  fetch('https://my-minimony.herokuapp.com/api/v1/boardspost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      boardId,
      postId,
    }),
  })
    .then((resp) => resp.json())
    .then((parsedResp) =>
      dispatch({ type: 'ADD_SAVE', save: parsedResp.save.data.attributes })
    )
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
