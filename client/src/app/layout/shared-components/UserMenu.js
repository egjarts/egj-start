import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Popover,
  MenuItem,
  Typography
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import { Link } from 'react-router-dom';

function UserMenu(props) {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  const user = auth.user;

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = event => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  const avatar = (preferences => {
    if (!preferences) {
      return { text: null, photoURL: null };
    }
    return {
      text: preferences.displayName
        ? preferences.displayName
        : preferences.email,
      photoURL: user.preferences.photoURL ? user.preferences.photoURL : null
    };
  })(user.preferences);

  return (
    <React.Fragment>
      <Button className='h-64' onClick={userMenuClick}>
        {avatar.photoURL ? (
          <Avatar className='' alt={avatar.text} src={avatar.photoURL} />
        ) : (
          <Avatar className=''>{(avatar.text || 'Z')[0].toUpperCase()}</Avatar>
        )}

        <div className='hidden md:flex flex-col ml-12 items-start'>
          <Typography component='span' className='normal-case font-600 flex'>
            {avatar.text}
          </Typography>
        </div>

        <Icon className='text-16 ml-12 hidden sm:flex' variant='action'>
          keyboard_arrow_down
        </Icon>
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        classes={{
          paper: 'py-8'
        }}
      >
        {!auth.login.success ? (
          <React.Fragment>
            <MenuItem component={Link} to='/login'>
              <ListItemIcon className='min-w-40'>
                <Icon>lock</Icon>
              </ListItemIcon>
              <ListItemText className='pl-0' primary='Login' />
            </MenuItem>
            <MenuItem component={Link} to='/register'>
              <ListItemIcon className='min-w-40'>
                <Icon>person_add</Icon>
              </ListItemIcon>
              <ListItemText className='pl-0' primary='Register' />
            </MenuItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MenuItem
              component={Link}
              to='/pages/profile'
              onClick={userMenuClose}
            >
              <ListItemIcon className='min-w-40'>
                <Icon>account_circle</Icon>
              </ListItemIcon>
              <ListItemText className='pl-0' primary='My Profile' />
            </MenuItem>
            <MenuItem component={Link} to='/apps/mail' onClick={userMenuClose}>
              <ListItemIcon className='min-w-40'>
                <Icon>mail</Icon>
              </ListItemIcon>
              <ListItemText className='pl-0' primary='Inbox' />
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(authActions.logoutUser());
                userMenuClose();
              }}
            >
              <ListItemIcon className='min-w-40'>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText className='pl-0' primary='Logout' />
            </MenuItem>
          </React.Fragment>
        )}
      </Popover>
    </React.Fragment>
  );
}

export default UserMenu;
