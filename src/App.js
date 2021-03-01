import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>

      <Route path='/' component={Login} />
      <Route path='/sign-up' component={SignUp} /> 
        
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
