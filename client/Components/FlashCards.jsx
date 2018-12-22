import React from 'react';
import { Grid } from '@material-ui/core';
import FlashCard from './FlashCard';

const FlashCards = (props) => {
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

export default FlashCards;
