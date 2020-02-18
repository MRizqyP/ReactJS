import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Userprofile from "./component/userprofile";
import Todo from "./component/todo";
import Timer from "./component/timer";
import Card from "./component/card";
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
        <Col>
          <Card />
        </Col>
        <Col>.</Col>
      </Row>
    </Container>
  );
}

export default App;
