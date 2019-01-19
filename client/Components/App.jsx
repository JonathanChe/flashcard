import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchAppBar from './NavBar';
import Flashcards from './FlashCards';
import AddCard from './AddCard';
import FlashCard from './FlashCard';
import * as actions from '../Actions/actions';

const mapStateToProps = state => ({
  totalCards: state.mainReducer.totalCards,
});

const mapDispatchToProps = dispatch => ({
  updateCountAndFlashCards: (cards) => dispatch(actions.updateCountAndFlashCards(cards)),
});

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:7777/addCard')
      .then(response => {
        const { data } = response;
        this.props.updateCountAndFlashCards(data);
      })
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
          <Route
            exact path="/"
            component={() => (
              <h1> {this.props.totalCards} Flashcards Total!</h1>
            )} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
