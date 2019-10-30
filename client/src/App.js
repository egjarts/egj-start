import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users />
      </div>
    );
  }
}

export default App;
