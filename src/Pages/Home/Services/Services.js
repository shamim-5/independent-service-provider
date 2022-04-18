import { Row } from "react-bootstrap";
import useHooks from "../../../hooks/useHooks";
import Service from "../Service/Service";

const Services = () => {
  const [service] = useHooks();

  return (
    <div className="container">
      <h2 className="text-center fw-bold text-info pb-4 pt-5 ">
        <span>WILD'S EXCLUSIVE | JUST FOR </span> <br />
        <span>YOU!</span>
      </h2>
      <Row xs={1} md={3} className="g-2">
        {service.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
