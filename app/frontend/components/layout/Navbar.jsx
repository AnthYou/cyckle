import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClasses = "text-gray-600 hover:text-sky-600 font-medium";
  let activeClassName = "underline";

  return (
    <nav className="px-8 py-4 flex flex-wrap items-center bg-gray-50 shadow-sm">
      <div className="text-center text-xl font-semibold mb-0">Cyckle</div>
      <ul className="ml-auto flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClassName : undefined}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClassName : undefined}`
            }
          >
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
