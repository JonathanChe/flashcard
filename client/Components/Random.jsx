import React from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';

const mapStateToProps = state => ({
  allCards: state.mainReducer.allCards,
});

const Random = (props) => {
  const { allCards } = props;
  const randomIndex = Math.floor(Math.random() * allCards.length);
  return (
    <>
      <FlashCard card={allCards[randomIndex]} />
    </>
  );
};

export default connect(mapStateToProps, null)(Random);
