import * as actionTypes from '../Constants/actionTypes';

export const displayRandomCard = (card) => ({
  type: actionTypes.DISPLAY_RANDOM_CARD,
  payload: card,
});

export const displaySelectedCard = (card) => ({
  type: actionTypes.DISPLAY_SELECTED_CARD,
  payload: card,
});

export const updateCountAndFlashCards = (cards) => ({
  type: actionTypes.UPDATE_COUNT_AND_FLASHCARDS,
  payload: cards,
});

export const showRandomBoolean = () => ({
  type: actionTypes.SHOW_RANDOM_BOOLEAN,
});
