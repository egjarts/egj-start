import React from 'react';
import { Router } from 'react-router-dom';
import history from '@history';
import Layout from './layouts';
import Staff from './modules/Staff';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import Placeholder from './layouts/Placeholder';

//
const dummyReducer = (
  state = {
    fuse: {
      settings: {
        current: { customScrollbars: true }
      }
    }
  },
  action
) => {
  return state;
};
const store = createStore(dummyReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout routes={routes} />
        </Router>
      </Provider>
    );
  }
}

export default App;

const routes = [
  {
    path: '/home/:id',
    exact: true,
    component: () => (
      <Placeholder title='Root Exact' text='Lorem ipsum dolor sit amet ...' />
    )
  },
  {
    path: '/',
    exact: true,
    component: () => <Staff />,
    routes: [
      {
        path: '/staff',
        component: () => <Staff />
      }
    ]
  }
];
