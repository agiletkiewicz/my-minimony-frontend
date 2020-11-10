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
        debugger
        return [...state, action.board];
      default: 
        return state;
    }
  
  }