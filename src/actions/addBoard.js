import axios from "axios"

export const addBoard = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/boards', {board: data}, {withCredentials: true})
        .then(response => {
            if(!data.errors) {
                dispatch({type: 'ADD_BOARD', board: response.data.data});
                dispatch({type: 'CLEAR_ERROR'});
            } else {
                dispatch({type: 'ADD_BOARD_FAILED', board: data.post.errors})
            }
        })
    }
}