import React, { useState } from 'react';
import axios from 'axios';

import '../assets/css/items.css';

const Items = (props) => {
  const [name] = useState(props.name);
  const [svgSrc] = useState(props.svgSrc);
  const [description] = useState(props.description);
  const [price] = useState(props.price);
  const [dispatchUrl] = useState(props.dispatchUrl);

  const handleDispatch = (url) => {
    axios.post(url)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (data.status) {
          console.log(`${name} transaction completed`);
        } else {
          console.error(`There was an error while trying to update ${name}`);
        }
      })
      .catch((error) => {
        console.error(`Connection failed for ${name}: ${error}`);
      });
  }

  return (
    <div className="item">
      <div className="content">
        <div className="item-image">
          <img src={svgSrc} alt="Item" />
        </div>

        <div className="item-metadata">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="price">Price: {price}</div>
        </div>

        <div className="actions">
          <div onClick={() => handleDispatch(dispatchUrl)} className="add-button">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
