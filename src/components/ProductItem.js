import React from 'react';

const ProductItem = (props) => (
  <div className="thumbnail">
    <img src={props.product_image} alt={props.product_name} height="200" width="192"/>
    <div className="caption">
      <h3>{props.product_name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  </div>
)

export default ProductItem
