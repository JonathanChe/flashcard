import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
};

const FlashCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.spacing}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.spacing} gutterBottom variant="headline" component="h1" align="center">
            Word
          </Typography>
        </CardContent>
        <CardActions className={classes.center}>
          <Button size="medium" color="primary">Check Answer</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(FlashCard);
