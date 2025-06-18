import './navbar.css';
import logoDental from '../assets/logoDental.png'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar">
          <img className="logo" src={logoDental} alt="" />

          <ul className="secciones">
              <li>Odontología</li>
              <li>Equipos</li>
              <li>Higiene Diaria</li>
              <li>Marcas</li>
          </ul>
          
          <CartWidget />
    </div>
  );
};

export default NavBar;
