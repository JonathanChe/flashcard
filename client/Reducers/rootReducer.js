import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainReducer from './mainReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  cardReducer,
  mainReducer,
  routing: routerReducer,
});

export default rootReducer;
