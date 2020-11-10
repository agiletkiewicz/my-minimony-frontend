import axios from 'axios'

export const addUser = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/users', {user: data}, {withCredentials: true})
        .then(response => {
          if (response.data.status === 'created') {
            dispatch({type: 'LOGIN_USER', user: response.data.user});
            dispatch({type: 'CLEAR_ERROR'});
          } else {
            dispatch({type: 'ADD_ERROR', error: response.data.error});
          }
        })
    };
}