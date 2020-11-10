
export function fetchBoards() {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/boards')
        .then(resp => resp.json())
        .then(parsedResp => 
            console.log(parsedResp)
            )
        // .then(parsedResp => dispatch({
        //     type: 'FETCH_POSTS',
        //     posts: parsedResp
        // }))
    }
    
}