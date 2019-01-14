import React from 'react';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';

const App = (props) => {

  const handleSubmit = values => {
    console.log('showing values', values);
  };

  return (
    <div>
      <SearchAppBar />
      <Flashcards />
      <AddCard onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
