import React from 'react';
import config from '../config/config';

const ItemsPerPage = (props) => {
  console.log(props);
  return (

      <select name="itemsPerPageList" className="text-primary pull-right" onChange={props.updateItemsPerPage}>
          {props.itemsPerPageList && props.itemsPerPageList.map( x => {
            return (
              <option key={x} value={x}>{x} items per page </option>
            )
          })}
      </select>

)}

ItemsPerPage.defaultProps = {
  itemsPerPageList: config.itemsPerPageList,
}

export default ItemsPerPage
