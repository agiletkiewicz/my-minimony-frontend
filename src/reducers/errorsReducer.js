export default (state = [], action) => {
  
    switch (action.type) {
      case 'ADD_ERROR':
        return state;
      case 'CLEAR_ERROR':
        return [];
      default: 
        return state;
    }
  
  }