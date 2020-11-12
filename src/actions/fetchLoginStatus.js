import axios from 'axios';

export const fetchLoginStatus = () => {

    return (dispatch) => {
        axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})
        .then(response => {
            debugger
            if (response.data.logged_in) {
                dispatch({type: 'LOGIN_USER', user: response.data.user.data.attributes});
                dispatch({type: 'FETCH_BOARDS', boards: response.data.boards.data});
                dispatch({type: 'FETCH_SAVES', saves: response.data.boards.included});
                dispatch({type: 'CLEAR_ERROR'});
            } 
        })
        .catch(error => dispatch({type: 'ADD_ERROR', error: "Something went wrong. Try again."}))
    };
    
}
