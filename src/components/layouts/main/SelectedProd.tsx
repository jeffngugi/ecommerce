import React from "react";

const SelectedProd = () => {
  return (
    <div className="col-4 prod-item">
      <img
        src={require("../../../images/products/laptop3.png")}
        alt="laptop1"
        width="100%"
      />
      <div className="stars">
        <i className="fa fa-star checked" id="one"></i>
        <i className="fa fa-star unchecked" id="two"></i>
        <i className="fa fa-star unchecked" id="three"></i>
        <i className="fa fa-star unchecked" id="four"></i>
        <i className="fa fa-star unchecked" id="five"></i>
      </div>
      <p className="font-12">8.0 Inch CHUWI Hi8 Air</p>
      <h6>$328</h6>
    </div>
  );
};

export default SelectedProd;
