import './components/NavBar/navbar.css';  
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const mensaje = "Hola"

  return (
     <BrowserRouter>
    <div className="app-container">
      <NavBar/>

     <Routes>
      <Route path= "/" element={ < ItemListContainer/>}/>
      <Route path= "/category/:category" element= { <ItemListContainer/>}/>
      <Route path= "/detail/:productId" element={ < ItemDetailContainer/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App

