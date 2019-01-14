import React, { Component } from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

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
  inputStyle: {
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

/* eslint-disable */
class AddCard extends Component {

  render() {
    const { classes, handleSubmit } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography align="center" gutterBottom variant="h2" className={classes.title}>
          Create New Card
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Field
            name="word"
            component={TextField}
            label="word"
            className={classes.inputStyle}
          />
          <Field
            name="type"
            component={TextField}
            label="type"
          />
          <Field
            name="definition"
            component={TextField}
            label="definition"
          />
          <Field
            name="sentence"
            component={TextField}
            label="sentence"
          />
          <Button type="submit" size="large" color="primary" variant="contained" className={classes.button}>
            Create
          </Button>
        </form>
      </Paper>
    );
  }
}

export default reduxForm({
  form: 'MaterialUiForm',
})(withStyles(styles)(AddCard));
