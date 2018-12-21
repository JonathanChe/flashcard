// npm installs
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rel path imports
import rootReducer from './Reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

// HMR for reducers
if (module.hot) {
  module.hot.accept('./Reducers/rootReducer', () => {
    /* eslint-disable */
    const nextRootReducer = require('./Reducers/rootReducer').default;
    // replaces entire reducer
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
