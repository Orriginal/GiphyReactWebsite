import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  avatar: {
    margin: 10
  }
}));

export default function AccountOverviewComponent({ account, actions }) {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <h1>Account overview</h1>
      <List className={classes.root}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              {account.firstName ? account.firstName[0].toUpperCase() : ''}
              {account.lastName ? account.lastName[0].toUpperCase() : ''}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${account.firstName} ${account.lastName} `} />
        </ListItem>
      </List>
    </Grid>
  );
}
