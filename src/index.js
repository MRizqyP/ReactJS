import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import About from "./component/about";
import Profile from "./component/profile";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./component/navbar";
import Notfound from "./component/notfound";
const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
