import axios from 'axios'

export const fetchLoginStatus = () => {

    return (dispatch) => {
        axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                dispatch({type: 'LOGIN_USER', user: response.data.user})
            } 
        })
    };
    
}
