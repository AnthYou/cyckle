import React from "react";
import Button from "../UI/Button";
import { NavLink, Link } from "react-router-dom";
import { RootState } from "@/store/index";
import { logoutUser } from "@/store/actions/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navLinkClasses = "text-gray-600 hover:text-sky-600 font-medium";
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  let activeClassName = "underline";

  const handleLogout = () => {
    dispatch(logoutUser());
  }

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
            to="/bikes"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClassName : undefined}`
            }
          >
            Trouver un vélo
          </NavLink>
        </li>
        <li className="flex flex-col justify-center items-center">
          {isAuthenticated ? (
            <Button color="alternate" onClick={handleLogout}>Se déconnecter</Button>
          ) : (
            <Link to="/login">
              <Button color="alternate">S'inscrire / se connecter</Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
