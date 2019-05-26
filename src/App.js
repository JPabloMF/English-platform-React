import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Dashboard from "./dashboard";
import Platform from "./platform";
import PageNotFound from "./components/pageNotFound";
import SignIn from "./signin/";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Login" component={SignIn} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Platform" component={Platform} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
