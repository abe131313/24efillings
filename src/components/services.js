import React, { Component } from "react";
import "./services.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartFill } from "react-bootstrap-icons";

function Services() {
  return (
    <div className="parent">
      <Card style={{ width: "18rem" }} className="cardBorer">
        <Card.Img variant="top" src={require('../truck.jpg')}/>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Earth Moving Equipment</Button>
        </Card.Body>
      </Card>
      <CartFill class="cartFill" color="blue" size={25}/>
    </div>
  );
}

export default Services;
