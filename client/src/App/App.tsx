import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import PrivateRoute from "../components/PrivateRouter";
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
