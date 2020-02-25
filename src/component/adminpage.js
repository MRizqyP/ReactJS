import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class adminpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem("persisted_state_hook:token")) {
      console.log("Call User Feed");
    } else {
      this.setState({ redirect: true });
    }
  }

  render() {
    console.log(this.state);
    console.log(sessionStorage.getItem("auth"));

    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }
    return <div>ini adalah halaman admin</div>;
  }
}
