export default (state = [], action) => {
  
    switch (action.type) {
      case 'FETCH_BOARDS':
        return action.boards.map( board => (
          {
            id: board.attributes.id,
            title: board.attributes.title,
            posts: board.relationships.posts.data.map(post => parseInt(post.id))
          }  
        ))
      case 'ADD_BOARD':
        let board = {
          id: action.board.attributes.id,
          title: action.board.attributes.title,
          posts: []
        }  
        return [...state, board];
      case 'ADD_SAVE':
        debugger
        return state.map( board => (
          board.id === action.payload.boardId ? {...board, posts: [...board.posts, action.payload.postId]} : board
        ))
      case 'LOGOUT_USER':
        return [];
      default: 
        return state;
    }
  
  }