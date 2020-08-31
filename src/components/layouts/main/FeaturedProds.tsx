import React from "react";
import Product from "./Product";

const FeaturedProd = () => {
  return (
    <section className="featured-products">
      <div className="title">
        <h5>
          <b>Featured Products</b>
        </h5>
        <ul className="nav font-15">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Laptops
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mobiles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Televisions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Audio & Video
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Video Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Storage devices
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accessories{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Other{" "}
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="products">
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="load-more">
        <span>
          <i className="fas fa-spinner"></i> Show more
        </span>
      </div>
    </section>
  );
};

export default FeaturedProd;
