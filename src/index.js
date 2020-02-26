import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GET from "./component/getbook";
import Notfound from "./component/notfound";
import Main from "./component/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import POST from "./component/postbook";
import GETBYID from "./component/gebookbyid";
import PUT from "./component/putbooksdareal";
import LOGIN from "./component/login";
import ADMIN from "./component/adminpage";
import REGISTER from "./component/registerpage";
import GETUSER from "./component/getbookuser";
import USERPAGE from "./component/userpage";

// console.log(token);

function getRole() {}
const token = JSON.parse(sessionStorage.getItem("persisted_state_hook:token"));

const routing = (
  <Router>
    <Switch>
      <Main>
        {(() => {
          if (!token) {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/login" component={LOGIN} />
                  <Route path="/register" component={REGISTER} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else if (token.token.Role === "USER") {
            return (
              <>
                <Switch>
                  <Route exact path="/" component={USERPAGE} />
                  <Route path="/buku" component={GETUSER} />
                  <Route component={Notfound} />
                </Switch>
              </>
            );
          } else if (token.token.Role === "ADMIN") {
            return (
              <Switch>
                <Route exact path="/admin" component={ADMIN} />
                <Route path="/get" component={GET} />
                {/* {/* <Route path="/profile" component={Profile} /> */}
                <Route path="/post" component={POST} /> */}
                <Route path="/getbyid" component={GETBYID} />
                <Route path="/put/:id" component={PUT} />
                <Route path="/login" component={LOGIN} />
                <Route component={Notfound} />
              </Switch>
            );
          }
        })()}
      </Main>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
