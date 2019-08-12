const bookReducer =(state = {name: 'chaman'}, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      console.log('ADD_BOOK called')
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}

export default bookReducer;