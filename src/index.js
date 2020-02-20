import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Form } from "reactstrap";
import GET from "./component/getbook";
import Notfound from "./component/notfound";
import Main from "./component/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import POST from "./component/postbook";
import GETBYID from "./component/gebookbyid";

const routing = (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/get" component={GET} />
          {/* {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/post" component={POST} /> */}
          <Route path="/getbyid" component={GETBYID} />
          <Route component={Notfound} />
        </Switch>
      </Main>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
