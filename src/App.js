import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Userprofile from "./component/userprofile";
import Todo from "./component/todo";
import Timer from "./component/timer";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Todo />
        </Col>
        <Col>
          <Timer />
        </Col>
        <Col>.</Col>
        <Col>.</Col>
      </Row>
    </Container>
  );
}

export default App;
