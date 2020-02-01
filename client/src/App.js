import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Postpickups from "./pages/Postpickups";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Jumbotronhome from "./components/Jumbotronhome";
import Gettingstarted from "./components/Gettingstarted";
import Truckhome from "./components/Truckhome";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import SpinnerComponent from "./pages/Home";
import Availablejobs from "./pages/Availablejobs";
import Currentjobs from "./pages/Currentjobs";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <PrivateRoute path="/postpickups" component={Postpickups} />
          <PrivateRoute path="/jobs" component={Availablejobs} />
          <PrivateRoute path="/currentjobs" component={Currentjobs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;