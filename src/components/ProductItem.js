import React from 'react';

const ProductItem = (props) => (
  <div className="thumbnail paddingtop10" >
    <img className="thumbnail-size" src={props.product_image} alt={props.product_name} height="200px" width="192px"/>
    <div className="caption">
      <hr />
      <h3>{props.product_name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  </div>
)

export default ProductItem
