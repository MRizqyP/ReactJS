import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "../navigation";
import Navbar from "../navbar";
const Main = props => {
  return (
    <>
      <Navbar />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <Col>Footer</Col>
      </Container>
    </>
  );
};
export default Main;
