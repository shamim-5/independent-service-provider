import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  let showError;
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    showError = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2 style={{ textAlign: "center" }}>Please Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email Address" required />

          <input type="password" name="password" placeholder="Password" required />
          <input type="submit" value="Login" />
        </form>
        {showError}
        <p>
          New to WildLife?{" "}
          <Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>
            Please Register
          </Link>{" "}
        </p>
        <p>
          Forget Password?
          <button className="btn btn-link text-primary pe-auto text-decoration-none">Reset Password</button>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
