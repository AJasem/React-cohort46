import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <h1 className="header">Products</h1>
    <nav className='top-navbar'>
      <ul className='top-nav-ul'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
