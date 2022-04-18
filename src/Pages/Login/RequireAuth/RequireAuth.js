import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = () => {
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default RequireAuth;
