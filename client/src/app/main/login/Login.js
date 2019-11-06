import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Button, InputAdornment, Icon } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { TextFieldFormsy } from '@fuse';
import Formsy from 'formsy-react';
import * as authActions from 'app/auth/store/actions';
import EmailAddress from 'email-addresses';
import GoogleLogin from 'react-google-login';

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
    const classes = useStyles();

    const dispatch = useDispatch();
    const login = useSelector(({ auth }) => auth.login);
    const formRef = useRef(null);

    const [canSubmit, setCanSubmit] = useState(false);
    const [isHostedDomain, setIsHostedDomain] = useState(false);

    useEffect(() => {
        if (login.error && (login.error.username || login.error.password)) {
            formRef.current.updateInputsWithError({
                ...login.error
            });
            setCanSubmit(false);
        }
    }, [login.error]);

    function handleSubmit(model) {
        dispatch(authActions.authenticate('firebase', model));
    }

    function checkForHostedDomain(currentValues) {
        (value => {
            const emailAddress = EmailAddress.parseOneAddress(value);
            setIsHostedDomain(
                emailAddress &&
                    emailAddress.domain &&
                    ['egjarts.org', 'egjpress.org'].includes(
                        emailAddress.domain
                    )
            );
        })(currentValues.username);
    }
    const googleLoginHandler = response => {
        dispatch(authActions.authenticate('google', response));
    };

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
                    <Typography
                        variant='h3'
                        color='inherit'
                        className='font-light'>
                        Welcome to the FUSE!
                    </Typography>
                </FuseAnimate>

                <FuseAnimate delay={400}>
                    <Typography
                        variant='subtitle1'
                        color='inherit'
                        className='max-w-512 mt-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus ullamcorper nisl erat, vel convallis elit
                        fermentum pellentesque. Sed mollis velit facilisis
                        facilisis.
                    </Typography>
                </FuseAnimate>
            </div>

            <FuseAnimate animation={{ translateX: [0, '100%'] }}>
                <Card className='w-full max-w-400 mx-auto m-16 md:m-0' square>
                    <CardContent className='flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 '>
                        <Typography
                            variant='h6'
                            className='text-center md:w-full mb-48'>
                            SIGN IN
                        </Typography>

                        <div className='w-full'>
                            <Formsy
                                onValidSubmit={handleSubmit}
                                onValid={() => setCanSubmit(true)}
                                onInvalid={() => setCanSubmit(false)}
                                onChange={checkForHostedDomain}
                                ref={formRef}
                                className='flex flex-col justify-center w-full'>
                                <TextFieldFormsy
                                    className='mb-16'
                                    type='text'
                                    name='username'
                                    label='Email'
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <Icon
                                                    className='text-20'
                                                    color='action'>
                                                    email
                                                </Icon>
                                            </InputAdornment>
                                        )
                                    }}
                                    variant='outlined'
                                    required
                                />
                                {!isHostedDomain && (
                                    <TextFieldFormsy
                                        className='mb-16'
                                        type='password'
                                        name='password'
                                        label='Password'
                                        validations={{
                                            minLength: 4
                                        }}
                                        validationErrors={{
                                            minLength:
                                                "That's way too short to be a valid password."
                                        }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <Icon
                                                        className='text-20'
                                                        color='action'>
                                                        vpn_key
                                                    </Icon>
                                                </InputAdornment>
                                            )
                                        }}
                                        variant='outlined'
                                        required
                                    />
                                )}

                                {!isHostedDomain && (
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='primary'
                                        className='w-full mx-auto normal-case mt-16'
                                        aria-label='SIGN IN'
                                        disabled={!canSubmit}
                                        value='firebase'>
                                        Sign In With Password
                                    </Button>
                                )}
                            </Formsy>
                        </div>
                        <div className='flex flex-col items-center justify-center pt-32'>
                            <GoogleLogin
                                theme='dark'
                                buttonText='Sign in with G Suite'
                                clientId='482975891403-s9o8368ec4v5ja1tajv548m0libv1k6p.apps.googleusercontent.com'
                                onSuccess={googleLoginHandler}
                                onFailure={googleLoginHandler}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center pt-32'>
                            <span className='font-medium'>
                                Don't have an account?
                            </span>
                            <Link className='font-medium' to='/register'>
                                Create an account
                            </Link>
                            <Link className='font-medium mt-8' to='/'>
                                Back to Dashboard
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    );
}

export default Login;
