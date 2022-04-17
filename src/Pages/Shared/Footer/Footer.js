import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-center text-muted mt-5">
        <small className="fs-6">
          Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 Framed-WildLife.com
        </small>
      </p>
    </div>
  );
};

export default Footer;
