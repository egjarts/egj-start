import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Login from './components/auth/Login';
import './App.scss';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
