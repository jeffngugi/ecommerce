import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={require("../../../images/logo.png")} alt="" />
          </Link>
          <p className="font-11">This is the store</p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pr-5" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <form action="#" className="search-nav form-inline">
                  <input type="text" className="" />
                  <button>
                    <i className="fas fa-search form-control-feedback mb-1"></i>
                  </button>
                </form>
              </li>
              <li className="nav-item item-2">
                <span>7 days a week from</span>
                <span>8:00am to 5:00pm</span>
              </li>
              <li className="nav-item">
                <i className="far fa-heart"></i>
              </li>
              <li className="nav-item">
                <i className="fas fa-shopping-cart"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
