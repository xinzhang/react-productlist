import * as types from './actionTypes';
//import productApi from '../api/productApi';

import {getAllProducts} from '../api/productApi';

export function loadProducts() {

  return function(dispatch) {
    dispatch(loadProductsRequest());

    return getAllProducts().then(data => {
      dispatch(loadProductsSuccess(data));
    }).catch(error => {
      dispatch(loadProductsFailure(error));
      throw(error);
    });

  }
}

export function loadProductsRequest() {
  return {type: types.PRODUCTS_LOAD_REQUEST}
}

export function loadProductsSuccess(products) {
  return {type: types.PRODUCTS_LOAD_SUCCESS, products}
}

export function loadProductsFailure(error) {
  return {type: types.PRODUCTS_LOAD_FAILURE, error: "load error"}
}
