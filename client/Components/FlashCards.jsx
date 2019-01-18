import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';

const mapStateToProps = state => ({
  allFlashcards: state.mainReducer.allCards,
});

const FlashCards = (props) => {
  const { allFlashcards } = props;

  const Cards = allFlashcards.map((card, idx) => (
    <FlashCard card={card} key={idx} />
  ));

  return (
    <div>
      <Grid container spacing={24} style={{ padding: 24 }}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <FlashCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, null)(FlashCards);
