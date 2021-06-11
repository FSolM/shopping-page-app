import React, { useState } from 'react';

import '../assets/css/cart.css';

import shoppingCart from '../assets/images/shopping-cart.svg';

const Cart = () => {
  const [render, setRender] = useState(false);

  return (
    <div className="cart">
      <div className="icon" onClick={() => setRender(!render)}>
        <img src={shoppingCart} alt="cart-icon" />
      </div>

      {
        render &&
        <div className="cart-container">
          <div className="title">Cart</div>
          <div className="contents">
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
          </div>
        </div>
      }
    </div>
  );
}

export default Cart;
