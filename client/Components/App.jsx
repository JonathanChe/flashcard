import React from 'react';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';

const App = (props) => {
  return (
    <div>
      <SearchAppBar />
      <Flashcards />
      <AddCard />
    </div>
  );
};

export default App;
