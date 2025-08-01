import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const existingItem = cart.find(prod => prod.id === item.id);
    if (existingItem) {
      setCart(cart.map(prod =>
        prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
      ));
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => {
      const price = Number(item.price.toString().replace(/[.$]/g, ""));
      return acc + price * item.cantidad;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeFromCart,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
