import * as actionTypes from '../client/Constants/actionTypes';
import {
  addCard,
  displayRandomCard,
  displaySelectedCard,
  allCards,
  totalCards,
  showRandomBoolean
} from '../client/Actions/actions';

describe('Actions', () => {
  const sampleCard = {
    word: 'testing',
    type: 'verb',
    sentence: 'I love testing',
    definition: 'Present participle of test',
  };

  describe('Action: addCard', () => {
    it('should create an action to add a card', () => {
      const expectedActionAddCard = {
        type: actionTypes.ADD_CARD,
        payload: sampleCard,
      };
      expect(addCard(sampleCard)).toEqual(expectedActionAddCard);
    });
  });

  describe('Action: displayRandomCard', () => {
    it('should create an action to display a random card', () => {
      const expectedActionDisplayRandomCard = {
        type: actionTypes.DISPLAY_RANDOM_CARD,
        payload: sampleCard,
      };
      expect(displayRandomCard(sampleCard)).toEqual(expectedActionDisplayRandomCard);
    });
  });

  describe('Action: displaySelectedCard', () => {
    it('should create an action to display the selected card', () => {
      const expectedActionADisplaySelectedCard = {
        type: actionTypes.DISPLAY_SELECTED_CARD,
        payload: sampleCard,
      };
      expect(displaySelectedCard(sampleCard)).toEqual(expectedActionADisplaySelectedCard);
    });
  });

  describe('Action: allCards', () => {
    it('should create an action to display all cards', () => {
      const expectedActionAllCards = {
        type: actionTypes.ALL_CARDS,
      };
      expect(allCards()).toEqual(expectedActionAllCards);
    });
  });

  describe('Action: totalCards', () => {
    it('should create an action to get the number of all cards', () => {
      const expectedActionTotalCards = {
        type: actionTypes.TOTAL_CARDS,
      };
      expect(totalCards()).toEqual(expectedActionTotalCards);
    });
  });

  describe('Action: showRandomBoolean', () => {
    it('should create an action to toggle the showRandom property', () => {
      const expectedActionShowRandomBoolean = {
        type: actionTypes.SHOW_RANDOM_BOOLEAN,
      };
      expect(showRandomBoolean()).toEqual(expectedActionShowRandomBoolean);
    });
  });
});
