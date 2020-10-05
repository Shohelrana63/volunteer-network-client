import React, { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import EventTask from './Components/EventTask/EventTask';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterForm from './Components/RegisterForm/RegisterForm';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/registerForm">
              <RegisterForm></RegisterForm>
            </PrivateRoute>

            <Route exact path="/task">
              <EventTask></EventTask>
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
