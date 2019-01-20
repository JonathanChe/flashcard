import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';

const styles = {
  paper: {
    height: '75vh',
    width: '75vh',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    paddingTop: '50px',
  },
  button: {
    marginTop: '1em',
  },
  width: {
    width: '75%',
  },
};

const mapStateToProps = state => ({
  allCards: state.mainReducer.allCards,
});

const ShowCard = (props) => {
  const { classes, allCards, match : { params : { id }}} = props;
  const flashcard = allCards.filter(card => card._cardID === Number(id))[0];
  const { word, type, definition, sentence } = flashcard;

  return (
    <div className={classes.title}>
      <Card className={classes.paper}>
        <CardContent>
          <Typography gutterBottom variant="headline" align="center">
            <p>
              <strong>Word: </strong> <span>{word}</span>
            </p>
            <p>
              <strong>Type: </strong> <em>{type}</em>
            </p>
            <p>
              <strong>Definition: </strong> <span>{definition}</span>
            </p>
            <p>
              <strong>Sentence: </strong> <span>{sentence}</span>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, null)(withStyles(styles)(ShowCard));
