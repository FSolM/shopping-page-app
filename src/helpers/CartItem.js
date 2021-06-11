import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../assets/css/cartitem.css';

const CartItem = (props) => {
  const [name] = useState(props.name);
  const [dataUrl] = useState(props.dataUrl);
  const [removeUrl] = useState(props.removeUrl);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log('CartItem effect')
    axios.get(dataUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setQuantity(data);
      })
      .catch((error) => {
        console.error(`There was an error while trying to fetch the cart of ${name}: ${error}`);
      });
  });

  const removeOne = (removeUrl) => {
    axios.post(removeUrl);
  };

  return (
    <div className="cart-item">
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div onClick={() => removeOne(removeUrl)}>-1</div>
    </div>
  );
};

export default CartItem;
