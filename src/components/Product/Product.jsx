import React from "react";
import "./Product.css";

export default function Product(product) {
  return (
    <div className="Product-container">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      <p>{product.description}</p>
      <button> &#9829; &#32; Send Love</button>
    </div>
  );
}
