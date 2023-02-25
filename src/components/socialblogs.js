import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SocialBlogs() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require('./digger.jpg')} />
      <Card.Body>
        <Card.Subtitle>Heavy Trucks</Card.Subtitle>
        <Card.Text className="fw-bold">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default SocialBlogs;
