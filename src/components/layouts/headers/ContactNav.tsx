import React from "react";
import { Link } from "react-router-dom";

const ContactNav = () => {
  return (
    <section className="contact-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-4 left-side">
            <p>
              <Link to="/#">(+800) 123 456 7890</Link>
              <Link to="/#">jeff@gmail.com</Link>
            </p>
          </div>
          <div className="col-sm-12 col-lg-8 right-side">
            <p>
              <Link to="#">
                <i className="fas fa-map-marker-alt"></i> Location Store
              </Link>
              <Link to="#">
                <i className="far fa-newspaper"></i> Blog
              </Link>
              <Link to="#">
                <i className="fas fa-shield-alt"></i> Guarantee
              </Link>
              <Link to="#">
                <i className="far fa-credit-card"></i> Payment
              </Link>
              <Link to="#">
                <i className="fas fa-truck"></i> Delivery
              </Link>
              <Link to="/register">Register</Link>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i> Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNav;
