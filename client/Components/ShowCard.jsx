import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const ShowCard = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1" align="center">
            <p>Word: </p>
            <p>Type: </p>
            <p>Definition: </p>
            <p>Sentence: </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowCard;
