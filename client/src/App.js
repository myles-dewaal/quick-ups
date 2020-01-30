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

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <Jumbotronhome />
          <Gettingstarted />
          <Truckhome />
          <Reviews />
          <Footer />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;