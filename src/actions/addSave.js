
export const addSave = (boardId, postId) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/boardspost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                boardId: boardId, 
                postId: postId
            }),
        })
        .then(resp => resp.json())
        .then(parsedResp => dispatch({type: 'ADD_SAVE', payload: {boardId, postId}}))
    }
}