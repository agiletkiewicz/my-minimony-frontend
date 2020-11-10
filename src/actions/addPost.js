import axios from "axios"

export const addPost = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3000/api/v1/posts', {post: data}, {withCredentials: true})
        .then(response => {
            if(!data.errors) {
                dispatch({type: 'ADD_POST', post: response.data.data})
            } else {
                dispatch({type: 'ADD_POST_FAILED', post: data.post.errors});
                dispatch({type: 'CLEAR_ERROR'});
            }
        })
    }
}