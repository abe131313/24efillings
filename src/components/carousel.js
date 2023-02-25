import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './services.css'
import './carousel.css'

function Carouselcomp() {
  return (
    <Carousel className="colorr">
      <Carousel.Item style={{display:"flex",flexDirection:"row",justifyContent:"center", alignItems:"center", marginTop:"10vh"}}>
        <Card style={{ width: "20rem",marginRight:"20%" }} className="cardBorer">
          <Card.Img variant="top" src={require('./digger.jpg')} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}  className="cardBorer">
          <Card.Img variant="top" src={require('./digger.jpg')} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcomp;
