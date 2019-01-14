import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import mainReducer from './mainReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  cardReducer,
  mainReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
