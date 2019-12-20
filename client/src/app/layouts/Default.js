// packaged
import React from 'react';
import { renderRoutes } from 'react-router-config';
import Toolbar from '../components/Toolbar';
import clsx from 'clsx';
import { createUseStyles as makeStyles } from 'react-jss';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '&.scroll-content': {
      '& $wrapper': {},
      '& $contentWrapper': {},
      '& $content': {}
    }
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
    flexDirection: 'column'
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 3,
    overflow: 'hidden',
    flex: '1 1 auto'
  },
  content: {
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
    '-webkit-overflow-scrolling': 'touch',
    zIndex: 2
  }
});

const Layout = ({ routes }) => {
  const classes = useStyles();
  return (
    <div id='layout-root' className={clsx(classes.root, 'main-content')}>
      <div className={classes.wrapper}>
        <React.Suspense fallback='loading'>
          {renderRoutes(routes)}
        </React.Suspense>
      </div>
    </div>
  );
};

export default Layout;
