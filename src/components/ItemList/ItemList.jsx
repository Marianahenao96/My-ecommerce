import Item from '../Item/Item';
import '../ItemListContainer/ItemListContainer';

const ItemList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) =>
        product.description && (
          <Item product={product} key={product.id} />
        )
      )}
    </div>
  );
};


export default ItemList;
