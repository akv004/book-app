import React from 'react';
import './App.css';
import CreateBook  from './CreateBook';
import BookList from './BookList';
function App() {
  return (
    <div className="App">
      <CreateBook/>
      <BookList/>
    </div>
  );
}

export default App;
