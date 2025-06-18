import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const mensaje = "Hola"

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a DentiShop! Encuentra tus insumos odontológicos aquí 🦷" />
    </div>
  );
}

export default App;
