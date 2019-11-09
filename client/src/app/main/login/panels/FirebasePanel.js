import React, { Fragment, useEffect, useRef, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import EmailAddress from 'email-addresses';

import { Button, InputAdornment, Icon } from '@material-ui/core';
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse';
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

function FirebasePanel() {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);
  const formRef = useRef(null);
  const classes = useStyles();

  const ACTION = {
    INVALID: 'INVALID',
    VALID: 'VALID',
    PROCESSING: 'PROCESSING',
    USERNAME_CHANGED: 'USERNAME_CHANGED'
  };

  function authenticate(provider, payload) {
    console.log({ provider, payload });
    dispatch(authActions.authenticate(provider, payload));
  }

  useEffect(() => {
    if (login.error && (login.error.username || login.error.password)) {
      formRef.current.updateInputsWithError({
        ...login.error
      });
      setComponentState(ACTION.INVALID);
    } else {
      if (login.processing) {
        setComponentState(ACTION.PROCESSING);
      }
    }
  }, [login.error, login.processing]);

  function componentStateReducer(state, action) {
    if (typeof action === 'string') action = { type: action };
    switch (action.type) {
      case ACTION.PROCESSING:
        return { ...state, canSubmit: false };
      case ACTION.VALID:
        return { ...state, canSubmit: true };
      case ACTION.INVALID:
        return { ...state, canSubmit: false };
      case ACTION.USERNAME_CHANGED:
        const emailAddress = EmailAddress.parseOneAddress(action.value);
        const hostedDomain =
          emailAddress &&
          emailAddress.domain &&
          ['egjarts.org', 'egjpress.org'].includes(emailAddress.domain)
            ? { isHostedDomain: true, hostedDomain: emailAddress.domain }
            : { isHostedDomain: false, hostedDomain: '*' };

        return { ...state, ...hostedDomain };
      default:
        return state;
    }
  }

  const [component, setComponentState] = useReducer(componentStateReducer, {
    canSubmit: false,
    isHostedDomain: false,
    hostedDomain: '*'
  });

  return (
    <Fragment>
      <Formsy
        onValidSubmit={model => authenticate('password', model)}
        onValid={() => setComponentState(ACTION.VALID)}
        onInvalid={() => setComponentState(ACTION.INVALID)}
        ref={formRef}
        className='flex flex-col justify-center w-full'>
        <TextFieldFormsy
          className='mb-16'
          type='text'
          name='username'
          label='Email'
          onChange={event => {
            setComponentState({
              type: 'USERNAME_CHANGED',
              value: event.target.value
            });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Icon className='text-20' color='action'>
                  email
                </Icon>
              </InputAdornment>
            )
          }}
          variant='outlined'
          required
        />
        {!component.isHostedDomain && (
          <Fragment>
            <TextFieldFormsy
              className='mb-16'
              type='password'
              name='password'
              label='Password'
              validations={{
                minLength: 4
              }}
              validationErrors={{
                minLength: "That's way too short to be a valid password."
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Icon className='text-20' color='action'>
                      vpn_key
                    </Icon>
                  </InputAdornment>
                )
              }}
              variant='outlined'
              required
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='w-full mx-auto normal-case mt-16'
              aria-label='SIGN IN'
              disabled={!component.canSubmit}>
              Sign In With Password
            </Button>
            <div className='flex flex-col items-center justify-center pt-32'>
              or
            </div>
          </Fragment>
        )}
        <div className='flex flex-col items-center justify-center pt-32'>
          <Button
            type='button'
            variant='contained'
            className={'mx-auto normal-case ' + classes.gSuiteLoginButton}
            startIcon={
              <img
                src='assets/images/logos/google.svg'
                className={classes.googleLogo}
              />
            }
            onClick={() => {
              authenticate('google', { hostedDomain: component.hostedDomain });
            }}>
            Sign in with G Suite
          </Button>
        </div>
      </Formsy>
    </Fragment>
  );
}

export default FirebasePanel;
