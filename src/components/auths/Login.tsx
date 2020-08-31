import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "./Auth.css";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="auth ">
        <div style={{ backgroundColor: "red", flex: 0.75 }}>
          <h2>Login</h2>
          <form className="auth-form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password..."
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
