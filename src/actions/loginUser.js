import axios from 'axios'

export const loginUser = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/login', {user: data}, {withCredentials: true})
        .then(response => {
        if (response.data.logged_in) {
            dispatch({type: 'LOGIN_USER', user: response.data.user.data.attributes});
            dispatch({type: 'FETCH_BOARDS', boards: response.data.boards.data});
            dispatch({type: 'CLEAR_ERROR'});
        } else {
            dispatch({type: 'LOGIN_USER_FAILED', error: "Can't verify account"});
        }
        })
    };
}
