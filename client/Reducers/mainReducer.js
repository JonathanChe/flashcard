import * as actionTypes from '../Constants/actionTypes';

const initialState = {
  allCards: [],
  totalCards: 0,
  showRandom: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_RANDOM_CARD:
      console.log('DISPLAYING RANDOM');
      break;
    case actionTypes.SHOW_RANDOM_BOOLEAN:
      console.log('toggling showRandom');
      break;
    case actionTypes.UPDATE_COUNT_AND_FLASHCARDS:
      return {
        ...state,
        totalCards: action.payload.length,
        allCards: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
