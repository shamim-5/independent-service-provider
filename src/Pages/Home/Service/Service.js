import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service, handlePurchase }) => {
  const { id, picture, price, name, details } = service;

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
              <Button onClick={() => handlePurchase(id)} variant="primary">
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
