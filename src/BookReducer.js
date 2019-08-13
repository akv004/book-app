const initialState = {
  books: []
}
const bookReducer =(state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      console.log('ADD_BOOK called')
      return {
        ...state,
        books: [...state.books, action.name]
      }
    default:
      return state;
  }
}

export default bookReducer;