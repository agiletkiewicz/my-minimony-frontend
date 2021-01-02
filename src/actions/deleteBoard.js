export const deleteBoard = (boardId, handleSuccess) => (dispatch) => {
  fetch(`https://my-minimony.herokuapp.com/api/v1/boards/${boardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((parsedResp) => {
      handleSuccess();
      dispatch({ type: 'DELETE_BOARD', board: boardId });
    })
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
