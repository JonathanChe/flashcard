// npm installs
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// rel path imports
import rootReducer from './Reducers/rootReducer';

const store = createStore(rootReducer);

// HMR for reducers
if (module.hot) {
  module.hot.accept('./Reducers/', () => {
    /* eslint-disable */
    const nextRootReducer = require('./Reducers/rootReducer').default;
    // replaces entire reducer
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
