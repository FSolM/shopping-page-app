import React from 'react';

import Items from '../helpers/Items';

import tshirt from '../assets/images/tshirt.svg';
import pen from '../assets/images/pen.svg';
import cup from '../assets/images/cup.svg';

import '../assets/css/products.css';

console.log({tshirt, pen, cup})

const Products = () => (
  <div className="products">
    <div>
      <Items
        name="Shirt"
        svgSrc={tshirt}
        description="Just cover yourself with this nice plain old shirt"
        price="$20.00"
        dispatchUrl="http://localhost:3001/api/cart/shirt/add"
      />

      <Items
        name="Pen"
        svgSrc={pen}
        description="For all your writing necessities"
        price="$5.00"
        dispatchUrl="http://localhost:3001/api/cart/pen/add"
      />

      <Items
        name="Mug"
        svgSrc={cup}
        description="You can either use it for coffee or ice cream"
        price="$7.50"
        dispatchUrl="http://localhost:3001/api/cart/mug/add"
      />
    </div>
  </div>
);

export default Products;
