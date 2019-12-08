import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  OutlinedInput,
  Icon,
  TextField,
  Typography,
  CardActions,
  Divider,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  LinearProgress,
  Toolbar,
  makeStyles,
  Grid
} from '@material-ui/core';
import * as Actions from '../store/actions/registration.actions';

const useStyles = makeStyles(theme => ({
  toolbar: { top: 'auto', bottom: 0 }
}));

function Welcome(props) {
  const classes = useStyles(props);

  const dispatch = useDispatch();

  function submitStep() {
    dispatch({
      type: Actions.SUBMIT_STEP,
      data: 1
    });
  }

  return (
    <div>
      <Typography variant='h5' className='text-center p-16'>
        Welcome
      </Typography>
      <Typography variant='body1' className='flex-grow overflow-x-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis
        nunc eget lorem dolor sed viverra ipsum. Dolor magna eget est lorem
        ipsum dolor sit amet consectetur. Ornare arcu dui vivamus arcu felis
        bibendum ut. Nunc sed blandit libero volutpat. Turpis egestas maecenas
        pharetra convallis posuere morbi. Porttitor eget dolor morbi non arcu.
        Neque egestas congue quisque egestas diam in arcu cursus euismod. Arcu
        dictum varius duis at consectetur lorem. Nibh tellus molestie nunc non
        blandit. Sed elementum tempus egestas sed sed risus. Urna molestie at
        elementum eu facilisis sed odio morbi. Facilisi morbi tempus iaculis
        urna id. Vulputate sapien nec sagittis aliquam. In hac habitasse platea
        dictumst. Vestibulum lectus mauris ultrices eros in cursus turpis massa
        tincidunt. Ac auctor augue mauris augue neque gravida in fermentum.
        Ultrices vitae auctor eu augue. Auctor urna nunc id cursus metus aliquam
        eleifend mi. Nisl condimentum id venenatis a condimentum vitae. Cursus
        in hac habitasse platea dictumst quisque sagittis.
      </Typography>

      <Grid container spacing={0} justify='center' className='p-16'>
        <Grid item xs={2} align='center'>
          &nbsp;
        </Grid>
        <Grid item xs={2} align='center'>
          <Button variant='contained' color='primary' onClick={submitStep}>
            Start
          </Button>
        </Grid>
        <Grid item xs={2} align='center'>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
