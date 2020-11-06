import axios from 'axios'

export const loginUser = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/login', {user: data}, {withCredentials: true})
        .then(response => {
        if (response.data.logged_in) {
            dispatch({type: 'LOGIN_USER', user: response.data.user});
            dispatch({type: 'LOGIN_USER_FAILED',});
        } else {
            dispatch({type: 'LOGIN_USER_FAILED', error: "Can't verify account"});
        }
        })
    };
}
