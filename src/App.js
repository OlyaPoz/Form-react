import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Login from './pages/Login';
//import SignUp from './pages/SignUp';
//import Header from './components/Header';
import ToDoPage from './pages/TaskToDo';

const App = props => {
  return (
    /* <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'component={Login} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
      </BrowserRouter>
*/
    
      <ToDoPage />
    
  );
};

export default App;
