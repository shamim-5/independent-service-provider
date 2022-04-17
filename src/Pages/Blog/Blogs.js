import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <Row xs={1} md={3} className="blogs my-2 g-4">
        <Col className="blog text-center">
          <h2 className="mb-3">Difference between "authorization" and "authentication"?</h2>
          <p>
            <small>
              Authentication is the process of verifying who someone is, where as authorization is the process of
              verifying what specific applications, files, and data a user has access to.
            </small>
          </p>
        </Col>
        <Col className="blog text-center">
          <h2 className="mb-3">
            Why are you using "firebase"? What other options do you have to implement authentication?
          </h2>
          <p>
            <small>
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
              authenticate users to your app. It supports authentication using passwords, phone numbers, popular
              federated identity providers like Google, Facebook and Twitter, and more.
            </small>
            <br />
            <small>
              React Firebase Hooks I used for implement authentication. This library explores how React Hooks can work
              to make integration with Firebase even more straightforward than it already is.
            </small>
          </p>
        </Col>
        <Col className="blog text-center">
          <h2 className="mb-3">What other services does "firebase" provide other than authentication?</h2>
          <p>
            <small>
              There are many services which Firebase provides, Most useful of them are: Cloud Firestore, Cloud
              Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.
            </small>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
