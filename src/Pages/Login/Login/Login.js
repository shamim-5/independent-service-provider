import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <h2 style={{ textAlign: "center" }}>Please Login</h2>
        <form>
         

          <input type="email" name="email" id="" placeholder="Email Address" required />

          <input type="password" name="password" id="" placeholder="Password" required />
          <input type="submit" value="Login" />
        </form>
        <p>
          New to Wild?{" "}
          <Link to="/register" className="text-danger pe-auto text-decoration-none">
            Please Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
