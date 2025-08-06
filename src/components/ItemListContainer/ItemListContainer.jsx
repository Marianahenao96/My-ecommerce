import useProducts from '../../hooks/useProducts';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
  const { category }= useParams ();
  const { products, loading } = useProducts(category);


  return (
    <div className="mensaje-container">
      <h2>{mensaje}</h2>
    
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
