import {combineReducers} from 'redux';

import products from './productReducer';
import initialState from './initialState';

const rootReducer = combineReducers({
  products,
  itemsPerPageList: initialState.itemsPerPageList
})

export default rootReducer;
