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
          <Typography gutterBottom variant="headline" component="h1" align="center">
            Word
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button size="medium" color="primary" href="/dist">Check Definiton</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FlashCard;
