import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 id="navbar-header">
      Currency Rates
    </h1>
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/currencies_list" className="nav-link">Currencies List</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
