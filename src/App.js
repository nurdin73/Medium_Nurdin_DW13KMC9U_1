import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Main from './Pages/Main';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="bg-App">
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
