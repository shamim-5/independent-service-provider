import React from "react";
import "./NotFound.css";
import not_found from "../../../images/my-pic/not-found.png";

const NotFound = () => {
  return (
    <div className="notFound d-flex justify-content-center align-items-center mt-4">
      <img src={not_found} alt="" />
    </div>
  );
};

export default NotFound;
