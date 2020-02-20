import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import Avatar from "./avatar";
import Name from "./name";
import Bio from "./bio";
export default class userprofile extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <Avatar />
            <h1 className="display-3">
              <Name name="Rizqy" />
            </h1>
            <p className="lead">
              <Bio />
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
