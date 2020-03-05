import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [hasBusiness, setHasBusiness] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleAuthChange = event => {
    setAuth(event.target.checked);
  };

  const handleBusChange = event => {
    setHasBusiness(event.target.checked);
  };
  const handleAccountMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleInfoMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleAuthChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
        <FormControlLabel
          control={<Switch checked={hasBusiness} onChange={handleBusChange} aria-label="login switch" />}
          label={auth ? 'Has Business' : 'Has Business'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            edge="start"
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
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            variant='menu'
          >
            {auth ?
              <div><MenuItem onClick={handleClose}>Profile</MenuItem>
                {hasBusiness ? <MenuItem component={RouterLink} to='/account/xyz123' onClick={handleClose}>My business</MenuItem> : false}
                <MenuItem component={RouterLink} to='' onClick={handleClose}>Change Password</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </div>
              :
              <div>
                <MenuItem component={RouterLink} to='/login' onClick={handleClose}>Login</MenuItem>
                <MenuItem component={RouterLink} to='/register' onClick={handleClose}>Register</MenuItem>
              </div>
            }
          </Menu>
          <IconButton
            edge="start"
            aria-label="information"
            aria-controls="info-menu-appbar"
            aria-haspopup="true"
            onClick={handleInfoMenu}
            color="inherit"
          >
            <InfoOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;