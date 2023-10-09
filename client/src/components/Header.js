import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/cart.gif";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { RiContactsBookFill, RiLoginBoxLine } from "react-icons/ri";
import "./Ad.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="containe">
        <Link className="navbar-bran" to="/">
          <img
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="d"
          />
          <span className="typography-1">Market Site</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/admin"
              >
                <GiPerspectiveDiceSixFacesRandom className="me-1" />
                <span className="d-md-none">Diseños</span>
                <span className="d-lg-block">Diseños disponibles</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <RiContactsBookFill className="me-1" />
                <span className="d-md-none">Home</span>
                <span className="d-lg-block">Inicio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iniciar-sesion">
                <RiLoginBoxLine className="me-1" />
                <span className="d-md-none">LogIn</span>
                <span className="d-lg-block">Iniciar Sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
