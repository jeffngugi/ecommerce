import React from "react";
// import d from '../../../images/banners/'
const SiteBanner = () => {
  return (
    <section className="site-banner mb-2">
      <div className="container-fluid row">
        <div className="col-lg-3 col-sm-12 col-xl-3">
          <div className="product-categories">
            <ul className="font-12">
              <li>
                <a href="#">
                  <i className="fas fa-camera"></i> Camera & Photo
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-laptop"></i> Laptops
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-mobile-alt"></i> Mobile Phones
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fas fa-tv"></i> Television
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-volume-up"></i> Audio & Video
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fas fa-headphones"></i> Accessories
                </a>
              </li>
              <li>
                <a href="#"> Office Electronics</a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fab fa-usb"></i> Storage Devices
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-print"></i> Printers
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-eye"></i> Security & protection
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-network-wired"></i> Networking
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fas fa-gamepad"></i> Video Games
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 col-sm-12 col-xl-9">
          <div className="container-fluid bg-dark site-slider p-0">
            <div className="banner-slider">
              {/* <div>
              <img
                src="./images/banners/banner22.jpg"
                alt="banner1"
                className="banner-img"
                width="100%"
                height="432px"
              />
            </div> */}
              <div>
                <img
                  src={require("../../../images/banners/banner22.jpg")}
                  alt="banner1"
                  className="banner-img"
                  width="100%"
                  height="432px"
                />
              </div>
            </div>
            <div className="slider-btn">
              <span className="prev position-top">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span className="next position-top right-0">
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteBanner;
