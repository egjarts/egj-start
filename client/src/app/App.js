import '@dev';
import './config/axios.config';
import React from 'react';
import { FuseLayout, FuseTheme } from '@fuse';
import Provider from 'react-redux/es/components/Provider';
import { Router } from 'react-router-dom';
import jssExtend from 'jss-extend';
import history from '@history';
import { Auth } from './auth';
import store from './store';
import { create } from 'jss';
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName
} from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AccessControl from 'app/auth/AccessControl';

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

class App extends React.Component {
  render() {
    return (
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Auth>
              <Router history={history}>
                <AccessControl>
                  <FuseTheme>
                    <FuseLayout />
                  </FuseTheme>
                </AccessControl>
              </Router>
            </Auth>
          </MuiPickersUtilsProvider>
        </Provider>
      </StylesProvider>
    );
  }
}

export default App;
