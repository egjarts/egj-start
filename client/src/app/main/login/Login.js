import React from 'react';
import * as authActions from 'app/auth/store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import FirebasePanel from './panels/FirebasePanel';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'linear-gradient(to right, ' +
      theme.palette.primary.dark +
      ' 0%, ' +
      darken(theme.palette.primary.dark, 0.5) +
      ' 100%)',
    color: theme.palette.primary.contrastText
  }
}));

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0'
      )}>
      <div className='flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left'>
        <FuseAnimate animation='transition.expandIn'>
          <img
            className='w-128 mb-32'
            src='assets/images/logos/fuse.svg'
            alt='logo'
          />
        </FuseAnimate>

        <FuseAnimate animation='transition.slideUpIn' delay={300}>
          <Typography variant='h3' color='inherit' className='font-light'>
            Welcome to E&amp;GJ
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={400}>
          <Typography
            variant='subtitle1'
            color='inherit'
            className='max-w-512 mt-16'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ullamcorper nisl erat, vel convallis elit fermentum pellentesque.
            Sed mollis velit facilisis facilisis.
          </Typography>
        </FuseAnimate>
      </div>

      <FuseAnimate animation={{ translateX: [0, '100%'] }}>
        <Card className='w-full max-w-400 mx-auto m-16 md:m-0' square>
          <CardContent className='flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 '>
            <Typography variant='h6' className='text-center md:w-full mb-48'>
              SIGN IN
            </Typography>

            <div className='w-full'>
              <FirebasePanel />
            </div>

          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default Login;
