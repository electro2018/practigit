import "./Navbar.css";

import {Link} from "react-router-dom"
import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

    const nombre = "Todas"

  return (
    <div className="navbar-container">
      <Link className="container-logo" to="/"><h2>Electrotienda</h2></Link>

      <ul className="navbar">
      <Link className="navbar-item" to="/" >Todas</Link>
      <Link className="navbar-item" to="/category/analogos" >Analogos</Link>
       <Link className="navbar-item" to="/category/digitales" >Digitales</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
