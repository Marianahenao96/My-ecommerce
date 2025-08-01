import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío 🛒</p>
      ) : (
        <>
          {cart.map((productCart) => {
            const price = Number(productCart.price.toString().replace(/[.$]/g, ""));
            const partialPrice = price * productCart.cantidad;

            return (
              <div className="cart-item" key={productCart.id}>
                <img
                  src={productCart.image}
                  alt={productCart.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="item-name">{productCart.name}</p>
                  <p className="item-price">Precio: ${productCart.price}</p>
                  <p className="item-qty">Cantidad: {productCart.cantidad}</p>
                  <p className="item-partial">Precio parcial: ${partialPrice.toLocaleString()}</p>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(productCart.id)}
                  >
                    Eliminar producto
                  </button>
                </div>
              </div>
            );
          })}
          <div className="cart-total">
            <h3>Total: ${totalPrice().toLocaleString()}</h3>
           <Link to="/checkout" className="btn-checkout">
            Continuar con la compra
           </Link>
            <button className="btn-clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
