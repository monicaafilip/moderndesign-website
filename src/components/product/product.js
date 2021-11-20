import React from "react";
import "./product.css";

const Product = ({ title, imageUrl }) => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={imageUrl} alt="produs"></img>
      </div>
    </div>
  );
};

export default Product;
