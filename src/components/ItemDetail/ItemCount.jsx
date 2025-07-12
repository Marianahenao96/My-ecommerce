import { useState } from "react";
import { addToCart } from "../../data/cart";
import "./ItemCount.css"; // estilos separados

const ItemCount = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(false);

  const aumentar = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregar = async () => {
    setLoading(true);
    try {
      await addToCart(product, cantidad);
      alert(`🛒 Agregaste ${cantidad} unidad(es) de ${product.name}`);
    } catch (error) {
      console.error("Error al agregar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="item-count-container">
      <div className="cantidad-control">
        <button onClick={disminuir} disabled={cantidad <= 1}>−</button>
        <span>{cantidad}</span>
        <button onClick={aumentar} disabled={cantidad >= product.stock}>+</button>
      </div>

      <button
        className="btn-agregar"
        onClick={handleAgregar}
        disabled={loading || product.stock === 0}
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
