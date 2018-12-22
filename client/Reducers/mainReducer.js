import * as actionTypes from '../Constants/actionTypes';

const initialState = {
  allCards: [],
  totalCards: 0,
  showRandom: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      console.log('added card');
      break;
    case actionTypes.DISPLAY_RANDOM_CARD:
      console.log('DISPLAYING RANDOM');
      break;
    case actionTypes.SHOW_RANDOM_BOOLEAN:
      console.log('toggling showRandom');
      break;
    default:
      return state;
  }
};

export default mainReducer;
