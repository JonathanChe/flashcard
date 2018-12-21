// npm installs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// rel path imports
import App from './Components/App';
import store from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
