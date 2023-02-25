import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import * as Icon from 'react-bootstrap-icons';
import { GearWide } from "react-bootstrap-icons";
import { GeoAlt } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {
  AlarmFill,
  ArrowLeftRight,
  CheckCircleFill,
} from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Carouselcomp from "./carousel.js";
import Services from "./services.js";
import SocialBlogs from "./socialblogs.js";
import "./navbar.css";
import "./carousel.css";

function Navigation() {
  return (
    <>
      <div className="hero-image img-fluid">
        <Navbar bg="dark" className="transparency">
          <Container>
            <Navbar.Brand href="#home" className="text-white">
              R<u>ent</u>or
            </Navbar.Brand>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a href="#" className="text-white nav-link active">
                  Rent
                </a>
              </li>
              <li class="nav-item">
                <a className="text-white nav-link active" href="#">
                  Buy
                </a>
              </li>
              <li class="nav-item">
                <a className="text-white nav-link active" href="#">
                  Learn
                </a>
              </li>
              <li class="nav-item">
                <a className="text-white nav-link active" href="#">
                  Training
                </a>
              </li>
              <li class="nav-item">
                <a className="text-white nav-link active" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a className="text-white nav-link active" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </Container>
        </Navbar>
        <h1 class="text-white center">A Rental Equipment is Basically an</h1>
        <h1 class="text-white center">
          <span className="anthray">ANTHRAY</span>&nbsp;on Wheels
        </h1>
        <Container className="options center">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="text-white">
                  <GearWide color="blue" size={20} />
                  &nbsp;Find Equipment
                </i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="text-white">
                  <GeoAlt color="blue" size={20} />
                  &nbsp;Job Site Address
                </i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="text-white">
                  <Calendar color="blue" size={20} />
                  &nbsp;Start Date
                </i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="text-white">
                  <Calendar color="blue" size={20} />
                  &nbsp;End Date
                </i>
              </a>
            </li>
          </ul>
        </Container>
        <p className="center smalltext text-secondary fs-6">
          Ex: Heavy Proclaim Truck
        </p>
        <Container className="center">
          <Button
            variant="primary"
            className="margin booknowstyle fw-bold fst-italic fs-4"
          >
            &nbsp;Book Now&nbsp;
          </Button>
        </Container>
      </div>
      <Container>
        <p className="fw-bold center fs-2 text-primary">
          <u>About us</u>
        </p>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <img src={require("../../src/truck.jpg")} className="imgg"></img>
          </Col>
          <Col lg={6}>
            <Card style={{ width: "48vw", height: "50vh" }}>
              <Card.Body>
                <Card.Text className="fw-bold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
                <Card.Link
                  className="fw-bold"
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  View more >>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <p className="fw-bold center fs-2 text-primary">
        <u>Services</u>
      </p>
      <Container>
        <Row>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
          <Col lg={4}>
            <Services />
          </Col>
        </Row>
      </Container>
      <Container
        className="whyweare"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fw-bold center fs-2 text-primary">
          <u className="text-white">Why We Are?</u>
        </p>
        <Row>
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="whyweare2">
              <Card.Body>
                <div className="center">
                  <AlarmFill color="white" size={50} />
                </div>
                <Card.Title className="center text-white margin">
                  Speed Service
                </Card.Title>
                <Card.Text className="center text-white margin text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="whyweare2">
              <Card.Body>
                <div className="center">
                  <ArrowLeftRight color="white" size={50} />
                </div>
                <Card.Title className="center text-white margin">
                  Any where
                </Card.Title>
                <Card.Text className="center text-white margin text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="whyweare2">
              <Card.Body>
                <div className="center">
                  <CheckCircleFill color="white" size={50} />
                </div>
                <Card.Title className="center text-white margin">
                  24/7 Service
                </Card.Title>
                <Card.Text className="center text-white margin text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p className="fw-bold center fs-2 text-primary">
          <u>Our Past Services</u>
        </p>
        <Carouselcomp />
      </Container>
      <Container>
        <p className="fw-bold center fs-2 text-primary">
          <u>Our Social Blogs</u>
        </p>
        <Row>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
          <Col lg={4}>
            <SocialBlogs />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="fs-2 text-white">
          <u>Subscribe to out newsletter.</u>
        </p>
        <div className="text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Form.Group className="mb-3 m-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-info ">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "10vw", height: "5vh", margin: "15px" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <Container fluid style={{ backgroundColor: "rgb(12, 7, 82)" }}>
        <Row>
          <Col>
            <p className="text-white fs-2">RENTOR</p>
          </Col>
          <Col>
            <p className="text-white">
              <u>Quick links</u>
            </p>
            <Row>
              <p className="text-white">Home</p>
            </Row>
            <Row>
              <p className="text-white">Testimonials</p>
            </Row>
            <Row>
              <p className="text-white">Blogs</p>
            </Row>
            <Row>
              <p className="text-white">Our services</p>
            </Row>
          </Col>
          <Col>
            <p className="text-white">
              <u>Account</u>
            </p>
            <Row>
              <p className="text-white">Profile</p>
            </Row>
            <Row>
              <p className="text-white">Change Password</p>
            </Row>
            <Row>
              <p className="text-white">Privacy terms</p>
            </Row>
            <Row>
              <p className="text-white">Others</p>
            </Row>
          </Col>
          <Col>
            <p className="text-white">
              <u>contact us</u>
            </p>
            <Row>
              <p className="text-white">Home</p>
            </Row>
            <Row>
              <p className="text-white">Testimonials</p>
            </Row>
            <Row>
              <p className="text-white">Blogs</p>
            </Row>
            <Row>
              <p className="text-white">Our services</p>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="center text-white" style={{backgroundColor:"blue"}}>
        All rights reserved @Rentor
      </Container>
    </>
  );
}

export default Navigation;
