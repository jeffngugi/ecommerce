import React from "react";
import SelectedProd from "./SelectedProd";
const SelectedProducts = () => {
  return (
    <section className="selected-products">
      <div className="title">
        <h5>
          <b>Selected Products</b>
        </h5>
        <ul className="nav font-15">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trending Item
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              New Arrivals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Best Sale
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="products container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              src={require("../../../images/new_arrval.png")}
              alt=""
              width="100%"
              className="d-flex"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="row h-25 bg-dark">
              <div className="col-12">skdsdjd</div>
            </div>
            <div className="row pt-5 pb-0 prod-left">
              <SelectedProd />
              <SelectedProd />
              <SelectedProd />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedProducts;
