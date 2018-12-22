import * as actionTypes from '../Constants/actionTypes';

const initialState = {
  word: '',
  type: '',
  definition: '',
  sentence: '',
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_RANDOM_CARD:
      console.log('displaying random');
      break;
    case actionTypes.DISPLAY_SELECTED_CARD:
      console.log('displaying selected');
      break;
    case actionTypes.ADD_CARD:
      console.log('adding card');
      break;
    default:
      return state;
  }
};

export default cardReducer;
