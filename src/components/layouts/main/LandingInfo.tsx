import React from "react";

const LandingInfo = () => {
  return (
    <section className="landing-info">
      <div className="container-fluid mt-12">
        <div className="info-1">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <i className="fas fa-shipping-fast fa-2x"></i>
              <span>
                <h3 className="font-19">Free Shippng</h3>
                <p className="font-12">Free Shipping All Order</p>
              </span>
            </div>
            <div className="col-sm-12 col-lg-3">
              <i className="fas fa-umbrella fa-2x"></i>
              <span>
                <h3 className="font-19">100% Money Guarantee</h3>
                <p className="font-12">30 days money back</p>
              </span>
            </div>
            <div className="col-sm-12 col-lg-3">
              <i className="fas fa-history fa-2x"></i>
              <span>
                <h3 className="font-19">Help Center</h3>
                <p className="font-12">24/7 Support System</p>
              </span>
            </div>
            <div className="col-sm-12 col-lg-3">
              <i className="far fa-credit-card fa-2x"></i>
              <span>
                <h3 className="font-19">Payment Method</h3>
                <p className="font-12">Secure Payment</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingInfo;
