import React from "react";
import ItemCount from "./ItemCount"; // asegúrate que esté en la misma carpeta
import "./ItemDetail.css";

const ItemDetail = ({ product = {} }) => {
  return (
    <div className="item-detail">
      <img className="item-image" src={product.image} alt={product.name} />

      <div className="item-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-price">${product.price}</p>

        <ItemCount product={product} />
      </div>
    </div>
  );
};

export default ItemDetail;
