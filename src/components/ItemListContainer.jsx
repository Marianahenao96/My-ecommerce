import './navbar.css'

const ItemListContainer = (props) => {
  return (
    <div className="mensaje-container">
      <h2>{ props.mensaje }</h2>
    </div>
  );
};

export default ItemListContainer;
