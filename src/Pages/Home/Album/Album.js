import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import pic1 from "../../../images/gallery/high-img (1).jpg";
import pic4 from "../../../images/gallery/high-img (4).jpg";
import pic5 from "../../../images/gallery/high-img (5).jpg";
import pic6 from "../../../images/gallery/high-img (6).jpg";
import pic7 from "../../../images/gallery/high-img (7).jpg";
import pic8 from "../../../images/gallery/high-img (8).jpg";
import pic9 from "../../../images/gallery/high-img (9).jpg";
import pic10 from "../../../images/gallery/high-img (10).jpg";
import pic11 from "../../../images/gallery/high-img (11).jpg";
import pic12 from "../../../images/gallery/high-img (12).jpg";

const Album = () => {
  return (
    <div>
      <h2 className="text-center fw-bold text-info pb-4 pt-5 ">WILDLIFE IMAGE SAMPLES</h2>
      <div className="container">
        <Row xs={1} md={4} className="g-2">
          <Col>
            <Card>
              <Card.Img variant="top" src={pic1} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic4} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic5} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic6} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic7} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic8} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic9} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic10} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic11} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic12} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Album;
