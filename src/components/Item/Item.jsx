import { useState } from 'react';
import { addToCart } from '../../data/cart'; 
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);
  const [verMas, setVerMas] = useState(false);
  const [loading, setLoading] = useState(false);

  const aumentar = () => setCantidad(c => c + 1);
  const disminuir = () => setCantidad(c => (c > 1 ? c - 1 : 1));
  const toggleDescripcion = () => setVerMas(!verMas);

  const handleAgregar = async () => {
    setLoading(true);
    try {
      await addToCart(product, cantidad);
    } catch (err) {
      console.error('Error al agregar al carrito:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="producto-card">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="producto-img"
        />
      )}

      <div className="producto-info">
        <p className="producto-nombre">{product.name}</p>

        <p className="producto-descripcion">
          {verMas ? product.description : product.description.slice(0, 120) + '...'}
          <button onClick={toggleDescripcion} className="ver-mas-btn">
            {verMas ? 'Ver menos' : 'Ver más'}
          </button>
        </p>

        <p className="precio">{product.price}</p>
        <p className="stock">Unidades: {product.stock}</p>

        <Link to={"/detail/"+ product.id} className="btn-info">
          Más información
        </Link>
      </div>
    </div>
  );
};
 
export default Item;
