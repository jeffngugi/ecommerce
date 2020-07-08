import React from "react";

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className="marginX-4">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul>
              <li>Contact us</li>
              <li>
                <i className="fas fa-phone-alt"></i> +(254)717031210
              </li>
              <li>
                <i className="far fa-envelope"></i> jeff@gmail.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Nairobi, Kenya
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-3">
            <ul>
              <li>Policies & Info</li>
              <li>Terms Conditions</li>
              <li>Policy for Buyers</li>
              <li>Shipping & Refund</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-3">
            <ul>
              <li>Quick Links</li>
              <li>Seller Login</li>
              <li>Seller Sign up</li>
              <li>Seller Handbook</li>
              <li>Seller Control</li>
              <li>Panel Seller FAQs</li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-3">
            <ul>
              <li>My account</li>
              <li>Accessories</li>
              <li>Sales</li>
              <li>Other links</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
