import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product = {} }) => {
  const [mostrarContador, setMostrarContador] = useState(true);
  const navigate = useNavigate(); 

  const handleGoToCart = () => {
    navigate("/cart"); 
  };

  return (
    <div className="item-detail">
      <img className="item-image" src={product.image} alt={product.name} />

      <div className="item-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-price">${product.price}</p>

        {mostrarContador ? (
          <ItemCount product={product} onAdded={() => setMostrarContador(false)} />
        ) : (
          <div>
            <p style={{ color: "green" }}>¡Producto agregado al carrito!</p>
            <button className="btn-ir-carrito" onClick={handleGoToCart}>
              Ir al carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
