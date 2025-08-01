import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to ="/Cart"className="cart-widget">
      🛒 <span>{totalQuantity()}</span>
    </Link>
  );
};

export default CartWidget;
