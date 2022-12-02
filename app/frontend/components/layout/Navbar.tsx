import React from "react";
import Button from "../UI/Button";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navLinkClasses = "text-gray-600 hover:text-sky-600 font-medium";
  let activeClassName = "underline";

  return (
    <nav className="container flex flex-wrap items-center">
      <h3>
        <Link
          to="/"
          style={{ fontFamily: "Playfair-Display", color: "#373737" }}
        >
          Cyckle
        </Link>
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
          <Link to="/login">
            <Button color="alternate">S'inscrire / se connecter</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
