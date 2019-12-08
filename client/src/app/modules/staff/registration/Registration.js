import _ from '@lodash';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store/reducers/registration.reducers';
import withReducer from 'app/store/withReducer';
import {
  Paper,
  Hidden,
  Icon,
  IconButton,
  Fab,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useMediaQuery,
  makeStyles,
  useTheme,
  Button
} from '@material-ui/core';
import { FusePageSimple } from '@fuse';
import * as Actions from './store/actions/registration.actions';

function Register(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  const theme = useTheme(props);

  let activeStep = null;

  const module = useSelector(
    ({ registration }) => registration,
    state => {
      const prevStep = activeStep;
      activeStep = state.activeStep;
      return _.isEqual(prevStep, activeStep);
    }
  );

  useEffect(() => {
    /**
     * Get the current user's registration status
     */
    dispatch(Actions.getRegistrationStatus(user));
  }, [dispatch, user]);

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FusePageSimple
      classes={{
        root: 'w-full',
        content: 'flex flex-col max-w-xl mx-auto',
        header: 'items-center min-h-72 h-72 md:h-136 md:min-h-136'
      }}
      sidebarInner
      innerScroll
      header={
        <div className='flex flex-col flex-1'>
          <div className='flex items-center pl-12 lg:pl-24 p-24'>
            <div>
              <img
                src='assets/images/logos/egjpress.svg'
                alt='logo'
                className='h-48 min-h-48 md:h-96 md:min-h-96'
              />
            </div>
          </div>
        </div>
      }
      content={
        <div className='p-24'>
          {isSmall && (
            <Stepper
              classes={{ root: 'bg-transparent' }}
              orientation='vertical'
              activeStep={module.activeStep && module.activeStep.index}
            >
              {module.steps.map((step, index) => (
                <Step key={step.id}>
                  <StepLabel>{step.title}</StepLabel>
                  <StepContent>
                    <step.component />
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          )}
          {!isSmall && module.activeStep && <module.activeStep.component />}
        </div>
      }
      leftSidebarContent={
        <Stepper
          classes={{ root: 'bg-transparent' }}
          orientation='vertical'
          activeStep={module.activeStep && module.activeStep.index}
        >
          {module.steps.map((step, index) => (
            <Step key={step.id}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      }
    />
  );
}

export default withReducer('registration', reducer)(Register);
