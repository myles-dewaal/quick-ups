import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAcct from "./pages/NewAcct";
import Profile from "./pages/Profile";

class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={NewAcct} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
