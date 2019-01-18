import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';
import FlashCard from './FlashCard';

const App = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:7777/addCard', values)
      .then(res => console.log(res))
      .catch(err => console.error('error posting ', err));
  };

  return (
    <Router>
      <div>
        <SearchAppBar />
        <Route exact path="/" component={FlashCard} />
        <Route
          path="/addCard"
          render={(props) => <AddCard {...props} onSubmit={handleSubmit} />}
        />
        <Route path="/random" component={FlashCard} />
        <Route path="/allCards" component={Flashcards} />
      </div>

    </Router>
  );
};

export default App;
