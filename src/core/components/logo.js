import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  linkWhite: {
    color: '#FFF',
    cursor: 'pointer',
    pointerEvents: 'all',
    zIndex: 2345,
    display: 'block',
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant='h6' noWrap>
      <Link to='/' className={classes.linkWhite}>
        GIF SEARCH
      </Link>
    </Typography>
  );
}
