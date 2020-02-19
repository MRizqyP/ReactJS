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
    <div>
      <Card>
        <CardImg
          top
          width="20%"
          src="../kinyot.jpg"
          alt="Card image cap"
          class="rounded-circle"
        />
        <CardBody>
          <CardTitle>
            <p className="text-success"></p>
          </CardTitle>
          <CardSubtitle>
            <p className="text-success">Kinyot</p>
          </CardSubtitle>
          <CardText>
            <p className="text-primary">
              SELAYAKNYA MANUSIA BIASA AKU BUTUH MAKAN DAN MINUM
            </p>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
