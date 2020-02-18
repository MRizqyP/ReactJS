import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Hello from "./component/hello";
import Clock from "./component/clock";

function App() {
  return (
    <Container>
      <Hello name="Rizqy" />
      <Clock />
    </Container>
  );
}

export default App;
