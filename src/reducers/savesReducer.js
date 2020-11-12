export default (state = [], action) => {
  
    switch (action.type) {
      case 'FETCH_SAVES':
          let newState = []
          for (const element of action.saves) {
              newState.push(element.attributes)
          }
        return newState;
      case 'ADD_SAVE':
        return [...state, action.save];
      case 'DELETE_SAVE':
        return state.filter( save => (
          save.id !== action.save
        )) 
      case 'LOGOUT_USER':
        return [];
      default: 
        return state;
    }
  
  };