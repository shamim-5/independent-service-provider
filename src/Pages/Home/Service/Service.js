import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import pic1 from "../../../images/gallery/high-img (1).jpg";
import pic5 from "../../../images/gallery/high-img (5).jpg";
import pic11 from "../../../images/gallery/high-img (11).jpg";

const Service = () => {
  return (
    <div>
      <h2 className="text-center fw-bold text-info pb-4 pt-5 ">
        <span>WILD'S EXCLUSIVE | JUST FOR </span> <br />
        <span>YOU!</span>
      </h2>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={pic1} />
              <Card.Body>
                <Card.Title>WILDLIFE TRAVEL TIPS</Card.Title>
                <Card.Text>
                  Wildlife destinations have so many and each has so much to offer. Travelogue and tips from the
                  wildlife photographers who has been there already will be so crucial to get most out of your wildlife
                  vacation.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary">Purchase</Button>
                <Card.Text className="text-warning fw-bolder fs-4">$180</Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic5} />
              <Card.Body>
                <Card.Title>WILDLIFE PHOTOGRAPHY</Card.Title>
                <Card.Text>
                  Browse through premium content on how to start photography, choosing the right camera and lens,
                  wildlife photography tips and techniques, field guides and nuances of wildlife photography.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary">Purchase</Button>
                <Card.Text className="text-warning fw-bolder fs-4">$145</Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic11} />
              <Card.Body>
                <Card.Title>HD WILDLIFE WALLPAPERS</Card.Title>
                <Card.Text>
                  Browse through multiple categories and hundreds of wildlife pictures. You can just see and enjoy the
                  pictures as well as download them for minimum price to use as your desktop wallpaper or others.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary">Purchase</Button>
                <Card.Text className="text-warning fw-bolder fs-4">$177</Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
