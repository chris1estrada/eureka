import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

// All the businesses within the specified radius will be stored into an array
// along with whether or not the business has an active deal or promo occurring
const all_businesses = [
  {'name': 'Business 1', 'active': true},
  {'name': 'Business 2', 'active': false},
  {'name': 'Business 3', 'active': false},
  {'name': 'Business 4', 'active': true},
  {'name': 'Business 5', 'active': false},
  {'name': 'Business 6', 'active': true},
  {'name': 'Business 7', 'active': true},
  {'name': 'Business 8', 'active': true}
];

// Empty array to later store all businesses within radius that have
// an ongoing deal or promo
const active_businesses = [];

// Empty array to later store all business within radius that do not have
// an ongoing deal or promo
const nonactive_businesses = [];

// Separate the array with all the businesses into their respective arrays
// based on their active status
all_businesses.map(val => {
  val.active ? active_businesses.push(val.name) : nonactive_businesses.push(val.name);
});

const drawerWidth = 240; //Length of the extending drawer

const useStyles = makeStyles(theme => ({
  //root: {
    //flexGrow: 1,
  //},
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));

const Header = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [hasBusiness, setHasBusiness] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const [openDrawer, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

      <CssBaseline />

      <AppBar position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })} 
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
            >
              <MenuIcon />
          </IconButton>

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

          {/*<FormGroup>*/}
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleAuthChange} aria-label="login switch" />}
              label={auth ? 'Logout' : 'Login'}
            />
            <FormControlLabel
              control={<Switch checked={hasBusiness} onChange={handleBusChange} aria-label="login switch" />}
              label={auth ? 'Has Business' : 'Has Business'}
            />
          {/*</FormGroup>*/}

        </Toolbar>

      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />
          <h3 className="col-centered">Active Deals</h3>
        <List>
          {active_businesses.map((val, index) => (
            <ListItem button component={Link} to={"/details/" + index} key={val}>
                <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>

        <Divider />
        <h3 className="col-centered">Standard</h3>
        <List>
          {nonactive_businesses.map((val, index) => (
            <ListItem button key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

    </div>
  );
};

export default Header;