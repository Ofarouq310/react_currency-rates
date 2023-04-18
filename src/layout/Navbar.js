import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 id="navbar-header">
      <NavLink to="/">Currency Rates</NavLink>
    </h1>
    <ul className="nav-list">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/currencies_list"
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        >
          Currencies List

        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
