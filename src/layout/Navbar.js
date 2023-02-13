import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link ">HOMEPAGE</Link>
      </li>
      <li>
        <Link to="/details" className="nav-link ">DETAILS</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
