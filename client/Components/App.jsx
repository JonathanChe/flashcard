import React from 'react';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';
import ShowCard from './ShowCard';

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
