import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../core/components/logo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  linkBlack: {
    color: '#000',
    cursor: 'pointer',
    pointerEvents: 'all',
    zIndex: 2345,
    display: 'block',
    textDecoration: 'none'
  },
  avatar: {
    margin: 10
  }
}));

export default function SearchAppBar({ account, search }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [inSearch, setInSearch] = useState(search);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const checkKeyPress = value => {
    if (value === 'Enter') {
      setInSearch(true);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Logo />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'Search' }}
                onChange={e => {
                  setInputValue(e.target.value);
                  if (inSearch) setInSearch(false);
                }}
                onKeyUp={e => checkKeyPress(e.key)}
              />
            </div>
            {account.loggedIn && (
              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <Avatar className={classes.avatar}>
                    {account.firstName
                      ? account.firstName[0].toUpperCase()
                      : ''}
                    {account.lastName ? account.lastName[0].toUpperCase() : ''}
                  </Avatar>
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <Link to='/account-details' className={classes.linkBlack}>
                      Change details
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/overview' className={classes.linkBlack}>
                      Overview
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {inSearch ? <Redirect to={`/search/${inputValue}`} /> : ''}
    </>
  );
}
