import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./component/navbar";
import axios from "axios";
import Userprofile from "./component/userprofile";
function App() {
  return (
    <center>
      {/* <Navbar /> */}
      <Userprofile />

      {/* //{" "}
      <Container>
        // <Row>// </Row>
        //{" "}
      </Container> */}
    </center>

    // Make a request for a user with a given ID
  );
}

export default App;
