import React from "react";
import useHooks from "../../../hooks/useHooks";
import CheckItems from "../CheckItems";

const Checkout = () => {
  const [service] = useHooks();

  return (
    <div>
      <div>
        <h2 className="text-center text-uppercase text-primary fw-bold pt-3 pb-4">
          <span>Plese checkout the service</span> <br />
          <span>that you want</span>
        </h2>
      </div>

      <div>
        {service.map((child) => (
          <CheckItems key={child.id} child={child}></CheckItems>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
