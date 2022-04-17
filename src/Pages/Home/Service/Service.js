import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import pic1 from "../../../images/gallery/high-img (1).jpg";
import pic4 from "../../../images/gallery/high-img (4).jpg";
import pic5 from "../../../images/gallery/high-img (5).jpg";
import pic11 from "../../../images/gallery/high-img (11).jpg";


const Service = () => {
  return (
    <div>
      <h2 className="text-center fw-bold text-info pb-4 pt-5 ">Welcome To Premium Photos</h2>
      <div className="container">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={pic1} />
              <Card.Footer>
                <Button variant="primary">Purchase</Button>{" "}
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic5} />
              <Card.Footer>
                <Button variant="primary">Purchase</Button>{" "}
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic11} />
              <Card.Footer>
                <Button variant="primary">Purchase</Button>{" "}
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic4} />
              <Card.Footer>
                <Button variant="primary">Purchase</Button>{" "}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
