import axios from 'axios'

export const logoutUser = (data) => {

    return (dispatch) => {
        axios.delete('http://localhost:3000/api/v1/logout', {withCredentials: true})
        .then(response => {
            dispatch({type: 'LOGOUT_USER'})
        })
    };
}