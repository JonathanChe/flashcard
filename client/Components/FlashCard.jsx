import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
  card: {
    height: '25vh',
    width: '50vh',
    margin: '0 auto',
  },
  spacing: {
    paddingTop: '50px',
  },
  center: {
    justifyContent: 'center',
  },
  anchor: {
    textDecoration: 'none',
    color: 'blue',
    fontweight: 'bold',
  },
};

const FlashCard = (props) => {
  const { classes, card } = props;

  const deleteItem = (id) => {
    axios.put('http://localhost:7777/deleteCard', {
      data: { id },
    });
  };

  return (
    <div className={classes.spacing}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.spacing} gutterBottom variant="headline" component="h1" align="center">
            {card.word}
          </Typography>
        </CardContent>
        <CardActions className={classes.center}>
          <Link className={classes.anchor} to={`/answer/${card._cardID}`}>Check Answer</Link>
        </CardActions>
        <CardActions className={classes.center}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              deleteItem(card._cardID)
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(FlashCard);
