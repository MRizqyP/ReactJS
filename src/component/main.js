import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "../component/navbar";
const Main = props => {
  return (
    <>
      <Navigation />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <Col>
          {" "}
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              Kinyot.com
            </a>
          </div>
        </Col>
      </Container>
    </>
  );
};
export default Main;
