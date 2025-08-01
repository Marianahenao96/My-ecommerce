import './navbar.css'; 
import logoDental from '../../assets/logoDental.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {

  
  return (
    <div className="navbar">
          <Link to="/">
          <img className="logo" src={logoDental} alt="" />
          </Link>

          <ul className="secciones">
              <li>
                <Link to="/category/Odontología">Odontología</Link>
              </li>
              <li>               
                 <Link to="/category/Equipos">Equipos</Link>
              </li>
              <li>
                <Link to="/category/Higiene">Higiene Diaria</Link>
              </li>
          </ul>
          
          <CartWidget />
    </div>
  );
};

export default NavBar;
