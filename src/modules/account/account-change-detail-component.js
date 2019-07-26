import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function ChangeDetailComponent({ account, actions }) {
  const classes = useStyles();

  const handleChange = name => event => {
    actions.setAccount({ ...account, [name]: event.target.value });
  };

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>Change account details</h1>
        <TextField
          id='standard-name'
          label='firstName'
          className={classes.textField}
          value={account.firstName}
          onChange={handleChange('firstName')}
          margin='normal'
        />
        <TextField
          id='standard-uncontrolled'
          label='lastname'
          value={account.lastName}
          className={classes.textField}
          onChange={handleChange('lastName')}
          margin='normal'
        />
      </Grid>
    </>
  );
}
