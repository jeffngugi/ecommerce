import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <section className="category-nav">
      <div className="container-fluid">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Apple
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Samsung
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Meizu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Xiaomi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Honor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Huawei
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Asus
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Nokia
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Motorola
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#">
              Caterpillar{" "}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryNav;
