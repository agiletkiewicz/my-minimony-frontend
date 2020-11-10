import axios from "axios"

export const addBoard = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/boards', {board: data}, {withCredentials: true})
        .then(response => {
            debugger
            if(!response.data.error) {
                dispatch({type: 'ADD_BOARD', board: response.data.data});
                dispatch({type: 'CLEAR_ERROR'});
            } else {
                dispatch({type: 'ADD_ERROR', error: response.data.error});
            }
        })
        .catch(error => dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
    }
}