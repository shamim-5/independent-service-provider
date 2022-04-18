import React from "react";

const Checkout = ({ check }) => {
  return (
    <div>
      <div>
        <h2 className="text-center text-uppercase text-primary fw-bold pt-3">
          <span>Plese checkout the service</span> <br />
          <span>that you want</span>
        </h2>
      </div>
      <div>
        <h2>{check}</h2>
      </div>
    </div>
  );
};

export default Checkout;
