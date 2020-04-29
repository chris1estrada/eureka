import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

//import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useAuth } from '../../hooks/useAuth'

// FOR TESTING PURPOSES
// All the businesses within the specified radius will be stored into an array
// along with whether or not the business has an active deal or promo occurring
const all_businesses = [
  { 'name': 'Business 1', 'active': true },
  { 'name': 'Business 2', 'active': false },
  { 'name': 'Business 3', 'active': false },
  { 'name': 'Business 4', 'active': true },
  { 'name': 'Business 5', 'active': false },
  { 'name': 'Business 6', 'active': true },
  { 'name': 'Business 7', 'active': true },
  { 'name': 'Business 8', 'active': true }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const Header = () => {
  const { user, logout } = useAuth()
  console.log(user);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleAccountMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose()
    logout()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton
              className={classes.menuButton}
              edge="end"
              aria-label="account of current user"
              aria-controls="account-menu-appbar"
              aria-haspopup="true"
              onClick={handleAccountMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="account-menu-appbar"
              anchorEl={anchorEl}

              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={open}
              onClose={handleClose}
              variant='menu'
            >
              {user.userId ?
                <div>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  {user.bid ?
                    <MenuItem
                      component={RouterLink}
                      to='/account/xyz123'
                      onClick={handleClose}
                    >
                      My business
                  </MenuItem>
                    : false}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </div>
                :
                <div>
                  <MenuItem component={RouterLink} to='/login' onClick={handleClose}>Login</MenuItem>
                  <MenuItem component={RouterLink} to='/register' onClick={handleClose}>Register</MenuItem>
                </div>
              }
            </Menu>
          </div>
        </Toolbar>

      </AppBar>
    </div>
  );
};

export default Header;
