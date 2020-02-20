import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function card() {
  return (
    <div class="card" className="rounded-circle">
      <center>
        <img src="../kinyot.jpg" width="30%" />
        <div class="card-body">
          <p class="card-text" class="text-success">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </center>
    </div>
  );
}
