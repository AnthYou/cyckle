import React from "react";
import Button from "../UI/Button";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const navLinkClasses = "text-gray-600 hover:text-sky-600 font-medium";
  let activeClassName = "underline";

  return (
    <nav className="container flex flex-wrap items-center">
      <h3 className="text-center text-xl font-semibold mb-0">
        <Link to="/" style={{fontFamily: 'Playfair-Display'}}>Cyckle</Link>
      </h3>
      <ul className="ml-auto flex space-x-4">
        <li className="flex flex-col justify-center items-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClassName : undefined}`
            }
          >
            Comment ça marche
          </NavLink>
        </li>
        <li className="flex flex-col justify-center items-center">
          <Button color="alternate">S'inscrire / se connecter</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
