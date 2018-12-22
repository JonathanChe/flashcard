import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const FlashCard = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Word
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary" href="/">Check Definiton</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FlashCard;
