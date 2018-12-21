import * as actionTypes from '../Constants/actionTypes';

const initialState = {
  cards: [],
  totalCards: 0,
  showRandom: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      console.log('added card');
      break;
    case actionTypes.DISPLAY_RANDOM:
      console.log('DISPLAYING RANDOM');
      break;
    default:
      return state;
  }
};

export default mainReducer;
