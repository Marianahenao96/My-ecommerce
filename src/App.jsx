import './components/NavBar/NavBar.css';  
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  const mensaje = "Hola"

  return (
     <BrowserRouter>
     <CartProvider>
    <div className="app-container">
      <NavBar/>

     <Routes>
      <Route path= "/" element={ < ItemListContainer/>}/>
      <Route path= "/category/:category" element= { <ItemListContainer/>}/>
      <Route path= "/detail/:productId" element={ < ItemDetailContainer/>}/>
      <Route path ="/checkout" element ={<Checkout/>}/>
      <Route path= "/Cart" element ={<Cart/>}/>
     </Routes>
     
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App

