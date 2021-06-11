import React from 'react';

import Cart from '../helpers/Cart';

import '../assets/css/navbar.css';

import logo from '../assets/images/shop.svg';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
        <img src={logo} alt="logo" />
      </a>
    </div>

    <div className="icons">
      <div><Cart /></div>
    </div>
  </div>
);

export default Navbar;
