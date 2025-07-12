import { useState, useEffect } from 'react';
import {getProducts} from '../data/products';

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (category){
          const productsFilter = data.filter((product)=> product.category === category)
          setProducts(productsFilter);
        }else{

          setProducts(data);
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading };
};

export default useProducts;
