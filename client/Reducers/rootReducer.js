import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  mainReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
