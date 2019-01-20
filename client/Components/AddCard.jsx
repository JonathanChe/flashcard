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
    paddingTop: '50px',
  },
  button: {
    marginTop: '1em',
  },
  width: {
    width: '75%',
  },
};

/* eslint-disable */
class AddCard extends Component {

  render() {
    const { classes, handleSubmit } = this.props;

    return (
      <div className={classes.title}>
        <Paper className={classes.paper}>
          <Typography align="center" gutterBottom variant="h2" className={classes.title}>
            Create New Card
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Field
              name="word"
              component={TextField}
              label="word"
              className={classes.width}
            />
            <Field
              name="type"
              component={TextField}
              label="type"
              className={classes.width}
            />
            <Field
              name="definition"
              component={TextField}
              label="definition"
              className={classes.width}
            />
            <Field
              name="sentence"
              component={TextField}
              label="sentence"
              className={classes.width}
            />
            <Button type="submit" size="large" color="primary" variant="contained" className={classes.button}>
              Create
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default reduxForm({
  form: 'MaterialUiForm',
})(withStyles(styles)(AddCard));
