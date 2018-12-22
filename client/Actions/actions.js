import * as actionTypes from '../Constants/actionTypes';

export const addCard = (card) => ({
  type: actionTypes.ADD_CARD,
  payload: card,
});

export const displayRandomCard = (card) => ({
  type: actionTypes.DISPLAY_RANDOM_CARD,
  payload: card,
});

export const displaySelectedCard = (card) => ({
  type: actionTypes.DISPLAY_SELECTED_CARD,
  payload: card,
});

export const allCards = () => ({
  type: actionTypes.ALL_CARDS,
});

export const totalCards = () => ({
  type: actionTypes.TOTAL_CARDS,
});

export const showRandomBoolean = () => ({
  type: actionTypes.SHOW_RANDOM_BOOLEAN,
});
