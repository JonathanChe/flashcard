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

  describe('Action: showRandomBoolean', () => {
    it('should create an action to toggle the showRandom property', () => {
      const expectedActionShowRandomBoolean = {
        type: actionTypes.SHOW_RANDOM_BOOLEAN,
      };
      expect(showRandomBoolean()).toEqual(expectedActionShowRandomBoolean);
    });
  });
});
