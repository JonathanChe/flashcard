import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';
import FlashCard from './FlashCard';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:7777/addCard')
      .then(response => console.log('RESPONSE', response))
      .catch(error => console.error('error fetching data ', error));
  }

  /* eslint-disable */
  handleSubmit(values) {
    axios.post('http://localhost:7777/addCard', values)
      .then(res => console.log('Successfully created card', res))
      .catch(err => console.error('error posting ', err));
  };

  render() {
    return (
      <Router>
        <div>
          <SearchAppBar />
          <Route exact path="/" component={FlashCard} />
          <Route
            path="/addCard"
            render={(props) => <AddCard {...props} onSubmit={this.handleSubmit} />}
          />
          <Route path="/random" component={FlashCard} />
          <Route path="/allCards" component={Flashcards} />
        </div>

      </Router>
    );
  }
}

export default App;
