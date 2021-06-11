import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CartItem from '../helpers/CartItem';

import '../assets/css/cart.css';

import shoppingCart from '../assets/images/shopping-cart.svg';

const Cart = () => {
  const [render, setRender] = useState(false);
  const [total, setTotal] = useState('0');

  useEffect(() => {
    console.log('Cart effect')
    axios.get('http://localhost:3001/api/cart/total')
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        setTotal(data);
      })
      .catch((error) => {
        console.error(`There was an error while trying to get the cart total: ${error}`);
      });
  });

  const handleClear = () => {
    axios.post('http://localhost:3001/api/cart/clear');
  };

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
            <CartItem
              name="Shirt"
              dataUrl="http://localhost:3001/api/cart/shirt/quantity"
              removeUrl="http://localhost:3001/api/cart/shirt/remove"
            />
            <CartItem
              name="Pen"
              dataUrl="http://localhost:3001/api/cart/pen/quantity"
              removeUrl="http://localhost:3001/api/cart/pen/remove"
            />
            <CartItem
              name="Mug"
              dataUrl="http://localhost:3001/api/cart/mug/quantity"
              removeUrl="http://localhost:3001/api/cart/mug/remove"
            />
          </div>
          <div className="total">
            <div onClick={()=> handleClear()}>Clear</div>
            <div>${total}</div>
          </div>
        </div>
      }
    </div>
  );
}

export default Cart;
