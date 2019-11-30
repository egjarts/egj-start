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
  Grid,
  List,
  ListItem,
  Paper
} from '@material-ui/core';
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from '../store/actions/registration.actions';

const useStyles = makeStyles({
  deemphasizedButton: {
    color: 'rgb(0, 0, 0, 0.54)',
    '&:hover': { color: 'rgb(0, 0, 0, 1)' }
  }
});

function AcceptAgreement(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const classes = useStyles();

  function agree() {
    dispatch({
      type: Actions.SUBMIT_STEP,
      data: 1
    });
  }

  function goBack() {
    dispatch({
      type: Actions.SUBMIT_STEP,
      data: -1
    });
  }

  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Volunteer / Non-disclosure agreement
      </Typography>
      <Typography variant='body1' component='div'>
        <List>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            vel turpis nunc eget lorem dolor sed viverra ipsum. Dolor magna eget
            est lorem ipsum dolor sit amet consectetur. Ornare arcu dui vivamus
            arcu felis bibendum ut.
          </ListItem>
        </List>
        <List>
          <ListItem>
            Nunc sed blandit libero volutpat. Turpis egestas maecenas pharetra
            convallis posuere morbi. Porttitor eget dolor morbi non arcu. Neque
            egestas congue quisque egestas diam in arcu cursus euismod. Arcu
            dictum varius duis at consectetur lorem.
          </ListItem>
        </List>
        <List>
          <ListItem>
            Nibh tellus molestie nunc non blandit. Sed elementum tempus egestas
            sed sed risus. Urna molestie at elementum eu facilisis sed odio
            morbi. Facilisi morbi tempus iaculis urna id. Vulputate sapien nec
            sagittis aliquam.
          </ListItem>
        </List>
        <List>
          <ListItem>
            In hac habitasse platea dictumst. Vestibulum lectus mauris ultrices
            eros in cursus turpis massa tincidunt. Ac auctor augue mauris augue
            neque gravida in fermentum.
          </ListItem>
        </List>
      </Typography>
      <Formsy className='flex flex-col justify-center w-full'>
        <TextFieldFormsy
          variant='outlined'
          required
          name='fullName'
          className='mb-16 w-1/2 mx-auto max-w-sm'
          type='text'
          label='Your Name'
          value={user.preferences.displayName}
        />

        <Grid container spacing={0}>
          <Grid item xs={2} align='left'>
            <Button onClick={goBack} className={classes.deemphasizedButton}>
              Back
            </Button>
          </Grid>
          <Grid item xs align='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={agree}
              type='submit'
              disabled
            >
              I Agree
            </Button>
          </Grid>
          <Grid item xs={2} align='center'>
            &nbsp;
          </Grid>
        </Grid>
      </Formsy>
    </div>
  );
}

export default AcceptAgreement;
