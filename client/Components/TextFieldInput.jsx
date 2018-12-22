import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  inputStyle: {
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
  },
};

const TextFieldInput = (props) => {
  const { inputType, classes, handleChange } = props;

  return (
    <>
      <TextField
        className={classes.inputStyle}
        name={inputType}
        label={inputType}
        placeholder={inputType}
        onChange={handleChange}
        fullWidth={true}
        margin="normal"
      />
    </>
  );
};

export default withStyles(styles)(TextFieldInput);
