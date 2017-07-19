import React from 'react';

const ItemsPerPage = (props) => {
  console.log(props);
  return (

      <select name="itemsPerPageList" className="text-primary padding3" onChange={props.updateItemsPerPage}>
          {props.itemsPerPageList && props.itemsPerPageList.map( x => {
            return (
              <option key={x} value={x}>{x} items per page </option>
            )
          })}
      </select>
  
)}

export default ItemsPerPage
