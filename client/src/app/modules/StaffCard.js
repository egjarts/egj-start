import React, { Fragment, useReducer, useRef, useState } from 'react';
import { Card, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';
import clsx from 'clsx';
import { createUseStyles as makeStyles } from 'react-jss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Icon from '@mdi/react';
import moment from 'moment';

import Avatar from '../components/Avatar';
import theme from '../config/theme.config';
import * as icon from 'styles/icon/icon';

const useStyles = makeStyles({
  cardWrapper: {
    display: 'inline-block',
    '& .card': {
      '&.disabled, &.archived': {
        opacity: 0.6,
        boxShadow:
          '0 .46875rem 2.1875rem rgba(90,97,105,.05),0 .9375rem 1.40625rem rgba(90,97,105,.05),0 .25rem .53125rem rgba(90,97,105,.06),0 .125rem .1875rem rgba(90,97,105,.05)'
      },
      '& .card-title': {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        position: 'relative',
        height: '1.5rem',
        '& $staffName': { position: 'absolute', bottom: 0, textAlign: 'center' }
      },
      '& .card-header': {
        marginBottom: '0',
        paddingTop: '0.65rem',
        paddingLeft: '0.50rem',
        paddingRight: '0.50rem',
        paddingBottom: '0',
        '& $staffAvatar': {
          width: '48px',
          height: '48px',
          fontSize: '2rem',
          '&.colorA': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(0, 184, 216, 0.8)'
          },
          '&.colorB': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(255, 180, 0, 0.8)'
          },
          '&.colorC': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(132, 69, 247, 0.8)'
          },
          '&.colorD': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(251, 121, 6, 0.8)'
          },
          '&.colorE': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(0, 123, 255, 0.8)'
          },
          '&.colorF': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(196, 24, 60, 1)'
          },
          '&.colorG': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(0, 184, 216, 0.6)'
          },
          '&.colorH': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(255, 180, 0, 0.6)'
          },
          '&.colorI': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(132, 69, 247, 0.6)'
          },
          '&.colorJ': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(251, 121, 6, 0.7)'
          },
          '&.colorK': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(0, 123, 255, 0.6)'
          },
          '&.colorL': {
            backgroundColor: '#f0f0f0',
            color: 'rgba(196, 24, 60, 0.8)'
          }
        }
      },
      '& .card-body': {
        bottom: 0,
        position: 'absolute',
        padding: '0.75rem',
        paddingTop: 0,
        '& .press-role': {
          textTransform: 'uppercase !important',
          letterSpacing: '0.05rem',
          fontSize: '0.65rem',
          fontWeight: 400
        },
        '& .foundation-role': {
          fontWeight: 500,
          textTransform: 'uppercase !important',
          letterSpacing: '0.05rem',
          fontSize: '0.65rem'
        },
        '& .foundation-join-date': {
          fontFamily: ['Secondary Caption Text', 'Segoe UI', 'Roboto'],
          textTransform: 'lowercase !important',
          letterSpacing: '0.05rem',
          fontSize: '0.65rem',
          float: 'right'
        }
      },
      '& .data-sources': {
        display: 'none'
      },
      '& *': { cursor: 'default' }
    }
  },
  [theme.breakpoints.md]: {
    cardWrapper: {
      display: 'inline-block',
      '& .card': {
        '& .card-title': {
          fontSize: '0.9rem',
          lineHeight: '1.1rem',
          height: '1.8rem'
        },
        '& .card-header': {
          '& $staffAvatar': {
            width: '48px',
            height: '48px',
            fontSize: '2.5rem'
          }
        },
        '& .card-body': {
          bottom: 0,
          position: 'absolute',
          padding: '0.75rem',
          paddingTop: 0,
          '& .press-role': {
            textTransform: 'uppercase !important',
            letterSpacing: '0.05rem',
            fontSize: '0.75rem'
          },
          '& .foundation-role': {
            fontWeight: 500,
            textTransform: 'uppercase !important',
            letterSpacing: '0.05rem',
            fontSize: '0.75rem'
          },
          '& .foundation-join-date': {
            fontFamily: ['Secondary Caption Text', 'Segoe UI', 'Roboto'],
            fontWeight: 300,
            textTransform: 'lowercase !important',
            letterSpacing: '0.05rem',
            fontSize: '0.75rem',
            float: 'right'
          }
        }
      }
    }
  },
  cardActions: {
    '&.popover': {
      boxShadow: 'none !important'
    },
    '& .arrow': { display: 'none' },
    backgroundColor: 'white',
    display: 'block',
    fontSize: '2rem',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    boxShadow: 'none !important',
    cursor: 'default',
    '& $cardAction': {
      cursor: 'pointer'
    }
  },
  staffName: {},
  staffAvatar: {}
});

const StaffCard = props => {
  const classes = useStyles();
  const target = useRef(null);
  const overlayContainer = useRef(null);

  const [show, setShow] = useState(false);

  const showCardActions = () => setShow(false); // disabled while working on the cards themselves
  const hideCardActions = () => setShow(false);

  const avatarColor =
    'color' +
    String.fromCharCode(
      // use colors A - F based on the first letter of the person's name
      'A'.charCodeAt(0) +
        ((props.name.displayName.toUpperCase().charCodeAt(0) -
          'A'.charCodeAt(0)) %
          12)
    );
  return (
    <>
      <div
        ref={target}
        onMouseEnter={showCardActions}
        onMouseLeave={hideCardActions}
        onClick={() => {
          showCardActions();
          setTimeout(() => hideCardActions(), 5000);
        }}
        className={clsx(classes.cardWrapper, 'm-0 p-1 p-md-2 text-center')}
        style={props.style}
        //key={['staff-card', index].join('-')}
      >
        <Card
          className={clsx('staff-detail', props.status.toLowerCase(), 'h-100')}
          border={props.status.toLowerCase()}
        >
          <Card.Header className='text-center'>
            <Card.Title
              className={clsx(
                classes.staffNameContainer,
                classes[avatarColor],
                'text-center'
              )}
            >
              <div className={clsx(classes.staffName, 'w-100')}>
                {props.name.fullName}
              </div>
            </Card.Title>
            <Avatar
              src={props.photoUrl}
              alt={props.name.displayName}
              className={clsx(classes.staffAvatar, avatarColor, 'mx-auto')}
            ></Avatar>
          </Card.Header>
          <Card.Body className='text-left w-100'>
            {props.status === 'Applied' && (
              <>
                <div className='small-label foundation-join-date'>
                  {moment(props.joinDate || props.appliedDate).fromNow()}
                </div>
                <div className='small-label foundation-role'>
                  {props.status}
                </div>
              </>
            )}
            {props.status !== 'Applied' &&
              props.orgRoles &&
              props.orgRoles.press &&
              (() => {
                const pressRole = props.orgRoles.press
                  .filter(orgRole => orgRole.primary)
                  .pop();
                if (pressRole)
                  return (
                    <div className='small-label press-role'>
                      {pressRole.name}
                    </div>
                  );
              })()}
            {props.status !== 'Applied' &&
              props.orgRoles &&
              props.orgRoles.foundation &&
              (() => {
                const foundationRole = props.orgRoles.foundation
                  .filter(orgRole => orgRole.primary)
                  .pop();
                if (foundationRole)
                  return (
                    <>
                      {(props.joinDate || props.appliedDate) && (
                        <div className='small-label foundation-join-date'>
                          {moment(props.joinDate || props.appliedDate).fromNow(
                            foundationRole.name !== 'Applied'
                          )}
                        </div>
                      )}
                      <div className='small-label foundation-role'>
                        {foundationRole.name}
                      </div>
                    </>
                  );
              })()}
          </Card.Body>
        </Card>
        <div ref={overlayContainer} />
      </div>
      {
        <Overlay
          //container={overlayContainer.current}
          target={target.current}
          placement='bottom'
          show={show}
          onHide={hideCardActions}
          popperConfig={{
            modifiers: {
              flip: { enabled: false },
              inner: { enabled: true },
              arrow: { enabled: false }
            }
          }}
        >
          {({
            placement,
            scheduleUpdate,
            arrowProps,
            outOfBoundaries,
            show: _show,
            ...props
          }) => {
            return (
              <Popover
                {...props}
                className={classes.cardActions}
                onMouseEnter={showCardActions}
                onMouseLeave={hideCardActions}
              >
                <Icon
                  className={classes.cardAction}
                  path={icon.Accept}
                  size={1}
                />{' '}
                <Icon
                  className={classes.cardAction}
                  path={icon.AccountDetails}
                  size={1}
                />{' '}
                <Icon
                  className={classes.cardAction}
                  path={icon.Archive}
                  size={1}
                />
              </Popover>
            );
          }}
        </Overlay>
      }
    </>
  );
};

export default React.memo(StaffCard);
