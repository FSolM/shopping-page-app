import React from 'react';

import Navbar from '../shared/Navbar';
import Products from '../views/Products';

import '../assets/css/home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <Products />
  </div>
);

export default Home;
