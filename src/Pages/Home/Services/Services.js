import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useHooks from "../../../hooks/useHooks";
import Checkout from "../../Checkout/Checkout/Checkout";
import Service from "../Service/Service";

const Services = () => {
  const [service] = useHooks();
  const [check, setCheck] = useState("");

  const handlePurchase = (id) => {
    setCheck(id);
  };
  

  return (
    <div className="container">
      <h2 className="text-center fw-bold text-info pb-4 pt-5 ">
        <span>WILD'S EXCLUSIVE | JUST FOR </span> <br />
        <span>YOU!</span>
      </h2>
      <Row xs={1} md={3} className="g-2">
        {service.map((service) => (
          <Service key={service.id} service={service} handlePurchase={handlePurchase}></Service>
        ))}
      </Row>
      <Checkout check={check}></Checkout>
    </div>
  );
};

export default Services;
