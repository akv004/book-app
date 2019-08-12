import { createStore } from 'redux';
import bookReducer from './BookReducer';


export default createStore(
  bookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);