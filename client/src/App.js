import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAcct from "./pages/NewAcct";
import Profile from "./pages/Profile";
import Postpickups from "./pages/Postpickups";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={NewAcct} />
          <Route exact path="/postpickup" component={Postpickups}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
