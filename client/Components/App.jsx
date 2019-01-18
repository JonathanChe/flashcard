import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';
import FlashCard from './FlashCard';


const App = (props) => {

  const handleSubmit = values => {
    console.log('showing values', values);
  };

  return (
    <Router>
      <div>
        <SearchAppBar />
        <Route exact path="/" component={FlashCard} />
        <Route path="/addCard" component={AddCard} />
        <Route path="/random" component={FlashCard} />
        <Route path="/allCards" component={Flashcards} />

      </div>

    </Router>
  );
};

export default App;
