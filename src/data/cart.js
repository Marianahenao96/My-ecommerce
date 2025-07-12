export const addToCart = async (producto, cantidad) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      
      const index = carrito.findIndex(item => item.id === producto.id);
      if (index !== -1) {
        carrito[index].cantidad += cantidad;
      } else {
        carrito.push({ ...producto, cantidad });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      resolve(carrito);
    }, 2000); 
  });
};
