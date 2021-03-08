import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
