
export const deleteSave = (saveId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/boardspost/${saveId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(parsedResp => console.log("success"))
        .catch(error => dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
    }
}