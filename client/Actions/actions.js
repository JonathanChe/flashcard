import * as actionTypes from '../Constants/actionTypes';

export const addCard = (card) => ({
  type: actionTypes.ADD_CARD,
  payload: card,
});
