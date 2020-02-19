import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./component/navbar";

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
  );
}

export default App;
