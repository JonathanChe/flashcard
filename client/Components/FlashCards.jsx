import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';

const mapStateToProps = state => ({
  allFlashcards: state.mainReducer.allCards,
});

const FlashCards = (props) => {
  const { allFlashcards } = props;

  const Cards = allFlashcards.map(card => (
    <FlashCard card={card} key={card._cardID} id={card._cardID}/>
  ));

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        {Cards}
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, null)(FlashCards);
