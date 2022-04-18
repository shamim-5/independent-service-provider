import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { picture, price, name, details } = service;
  const navigate = useNavigate();

  const navigateCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div className="container">
        <Col>
          <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{details}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <Button onClick={() => navigateCheckOut()} variant="primary">
                Purchase
              </Button>
              <Card.Text className="text-warning fw-bolder fs-4">{price}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Service;
