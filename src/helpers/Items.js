import React, { useState } from 'react';

import '../assets/css/items.css';

const Items = (props) => {
  const [name] = useState(props.name);
  const [svgSrc] = useState(props.svgSrc);
  const [description] = useState(props.description);
  const [price] = useState(props.price);

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
          <div className="add-button">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
