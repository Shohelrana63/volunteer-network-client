import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/registerForm">
            <RegisterForm></RegisterForm>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
