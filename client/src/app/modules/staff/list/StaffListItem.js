import React from 'react';
import {
  IconButton,
  Icon,
  Typography,
  Checkbox,
  ListItem
} from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import * as Actions from './store/actions';
import StaffListChip from './StaffListChip';

const useStyles = makeStyles({
  staffListItem: {
    '&.completed': {
      background: 'rgba(0,0,0,0.03)',
      '& .staffList-title, & .staffList-notes': {
        textDecoration: 'line-through'
      }
    }
  }
});

function StaffListItem(props) {
  const dispatch = useDispatch();
  const labels = useSelector(({ staffApp }) => staffApp.labels);

  const classes = useStyles(props);

  return (
    <ListItem
      className={clsx(
        classes.staffListItem,
        { completed: props.staffList.completed },
        'border-solid border-b-1 py-16  px-0 sm:px-8'
      )}
      onClick={ev => {
        ev.preventDefault();
        dispatch(Actions.openEditStaffDialog(props.staffList));
      }}
      dense
      button
    >
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={props.staffList.completed}
        onChange={() => dispatch(Actions.toggleCompleted(props.staffList))}
        onClick={ev => ev.stopPropagation()}
      />

      <div className='flex flex-1 flex-col relative overflow-hidden pl-8'>
        <Typography
          variant='subtitle1'
          className='staffList-title truncate'
          color={props.staffList.completed ? 'textSecondary' : 'inherit'}
        >
          {props.staffList.title}
        </Typography>

        <Typography color='textSecondary' className='staffList-notes truncate'>
          {_.truncate(
            props.staffList.originalForm.fields[0].data.replace(
              /<(?:.|\n)*?>/gm,
              ''
            ),
            {
              length: 180
            }
          )}
        </Typography>

        {/* <div className={clsx(classes.labels, 'flex mt-8')}>
          {props.staffList.labels.map(label => (
            <StaffListChip
              className='mr-4'
              title={_.find(labels, { id: label }).title}
              color={_.find(labels, { id: label }).color}
              key={label}
            />
          ))}
        </div> */}
      </div>

      <div className='px-8'>
        <IconButton
          onClick={ev => {
            ev.preventDefault();
            ev.stopPropagation();
            dispatch(Actions.toggleImportant(props.staffList));
          }}
        >
          {props.staffList.important ? (
            <Icon style={{ color: red[500] }}>error</Icon>
          ) : (
            <Icon>error_outline</Icon>
          )}
        </IconButton>
        <IconButton
          onClick={ev => {
            ev.preventDefault();
            ev.stopPropagation();
            dispatch(Actions.toggleStarred(props.staffList));
          }}
        >
          {props.staffList.starred ? (
            <Icon style={{ color: amber[500] }}>star</Icon>
          ) : (
            <Icon>star_outline</Icon>
          )}
        </IconButton>
      </div>
    </ListItem>
  );
}

export default StaffListItem;
