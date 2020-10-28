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
        .then(data => dispatch({type: 'ADD_POST', post: data}))
    }
}