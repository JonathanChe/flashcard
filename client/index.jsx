// npm installs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// rel path imports
import App from './Components/App';
import Card from './Components/Card';
import store from './store';

const router = (
  <Provider>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="view/:cardId" component={Card} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
