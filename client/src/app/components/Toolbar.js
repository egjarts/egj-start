import React, { Text } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import clsx from 'clsx';
import { createUseStyles as makeStyles } from 'react-jss';

const classes = clsx(
  'main-navbar',
  'bg-white',
  'border-bottom',
  'sticky-top',
  'flex relative z-10'
);

const useStyles = makeStyles({
  switch: {
    display: 'inline-block',
    marginLeft: '2rem'
  }
});

const Toolbar = ({ filters, applyFilters }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        'main-navbar',
        'bg-white',
        'border-bottom',
        'sticky-top',
        'flex relative z-10'
      )}
      id='main-navbar'
    >
      <Navbar type='light' className='align-items-stretch flex-md-nowrap p-0'>
        <Nav navbar className='flex-row'>
          <fieldset>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L'
                );

                element.checked = !element.checked;
                applyFilters({ active: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L'
                type='checkbox'
                className='custom-control-input'
                checked={filters.active}
                onChange={() => {
                  return;
                }}
                onClick={() => {
                  const element = document.getElementById(
                    'dr-checkbox-kQp3jZKu4L'
                  );

                  element.checked = !element.checked;
                  applyFilters({ active: element.checked });
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Active</span>
            </label>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L2'
                );

                element.checked = !element.checked;
                applyFilters({ applied: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L2'
                type='checkbox'
                className='custom-control-input'
                checked={filters.applied}
                onChange={() => {
                  return;
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L2'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Applied</span>
            </label>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L3'
                );

                element.checked = !element.checked;
                applyFilters({ inactive: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L3'
                type='checkbox'
                className='custom-control-input'
                checked={filters.inactive}
                onChange={() => {
                  return;
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L3'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Inactive</span>
            </label>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L4'
                );

                element.checked = !element.checked;
                applyFilters({ disabled: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L4'
                type='checkbox'
                className='custom-control-input'
                checked={filters.disabled}
                onChange={() => {
                  return;
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L4'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Disabled</span>
            </label>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L5'
                );

                element.checked = !element.checked;
                applyFilters({ archived: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L5'
                type='checkbox'
                className='custom-control-input'
                checked={filters.archived}
                onChange={() => {
                  return;
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L5'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Archived</span>
            </label>
            <label
              className={clsx(
                classes.switch,
                'custom-control custom-toggle custom-toggle-sm'
              )}
              onClick={() => {
                const element = document.getElementById(
                  'dr-checkbox-kQp3jZKu4L6'
                );

                element.checked = !element.checked;
                applyFilters({ deleted: element.checked });
              }}
            >
              <input
                id='dr-checkbox-kQp3jZKu4L6'
                type='checkbox'
                className='custom-control-input'
                checked={filters.deleted}
                onChange={() => {
                  return;
                }}
              />
              <label
                id='dr-checkbox-kQp3jZKu4L6'
                className='custom-control-label'
                aria-hidden='true'
              ></label>
              <span className='custom-control-description'>Deleted</span>
            </label>
          </fieldset>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Toolbar;
