import React from 'react';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';

const App = (props) => {
  return (
    <div>
      <SearchAppBar />
      <h1>Flashcards</h1>
      <Flashcards />
    </div>
  );
};

export default App;
