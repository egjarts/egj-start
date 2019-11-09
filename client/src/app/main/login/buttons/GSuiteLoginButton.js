import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gSuiteLoginButton: {
    backgroundColor: 'rgb(66, 133, 244)',
    '&:hover': { backgroundColor: 'rgb(66, 133, 244)' },
    display: 'inline-flex',
    alignItems: 'center',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif'
  },
  googleLogo: {
    marginTop: '-4px',
    marginBottom: '-4px'
  }
});

export default function GSuiteLoginButton() {
  const classes = useStyles();

  return (
    <Button
      type='button'
      variant='contained'
      className={'mx-auto normal-case ' + classes.gSuiteLoginButton}
      startIcon={
        <img
          src='assets/images/logos/google.svg'
          className={classes.googleLogo}
        />
      }>
      Sign in with G Suite
    </Button>
  );
}

export default GSuiteLoginButton;