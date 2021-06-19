import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
