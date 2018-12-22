import React, { Component } from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextFieldInput from './TextFieldInput';

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
    paddingTop: '0.5em',
  },
  button: {
    marginTop: '1em',
  },
};

class AddCard extends Component {

  handleCreate(event) {
    console.log(event)
  }

  handleSubmit() {

  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography align="center" gutterBottom variant="h2" className={classes.title}>
          Create New Card
        </Typography>
        <form onSubmit={this.handleCreate} className={classes.form}>
          <TextFieldInput inputType="word" />
          <TextFieldInput inputType="type" />
          <TextFieldInput inputType="definition" />
          <TextFieldInput inputType="sentence" />
          <Button type="submit" size="large" color="primary" variant="contained" className={classes.button}>
            Create
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(AddCard);
