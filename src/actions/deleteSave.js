export const deleteSave = (saveId) => (dispatch) => {
  fetch(`https://my-minimony.herokuapp.com/api/v1/boardspost/${saveId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((parsedResp) => dispatch({ type: 'DELETE_SAVE', save: saveId }))
    .catch((error) =>
      dispatch({ type: 'ADD_ERROR', error: 'Something went wrong. Try again.' })
    );
};
