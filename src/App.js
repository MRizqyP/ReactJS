import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Hello from "./component/hello";
import Clock from "./component/clock";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Hello name="Rizqy" />
        </Col>
        <Col>
          <Clock />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
