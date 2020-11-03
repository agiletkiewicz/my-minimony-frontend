export const addPost = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({post: data})
        })
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors) {
                dispatch({type: 'ADD_POST', post: data})
            } else {
                dispatch({type: 'ADD_POST_FAILED', post: data.post.errors})
            }
        })
    }
}